/**
 * Pure business logic, kept free of Firebase dependencies so it can be
 * unit-tested in isolation.
 */

export interface OrderLine {
  itemId: string;
  quantity: number;
  unitCost: number;
}

/** Normalizes and validates a shop name. Throws on invalid input. */
export function normalizeShopName(raw: unknown): string {
  if (typeof raw !== 'string') {
    throw new Error('Shop name must be a string.');
  }
  const name = raw.trim().replace(/\s+/g, ' ');
  if (name.length < 2 || name.length > 80) {
    throw new Error('Shop name must be between 2 and 80 characters.');
  }
  return name;
}

/** Validates an order line coming from an untrusted client document. */
export function isValidOrderLine(line: unknown): line is OrderLine {
  if (typeof line !== 'object' || line === null) return false;
  const l = line as Record<string, unknown>;
  return (
    typeof l.itemId === 'string' &&
    l.itemId.length > 0 &&
    typeof l.quantity === 'number' &&
    Number.isFinite(l.quantity) &&
    l.quantity > 0 &&
    typeof l.unitCost === 'number' &&
    Number.isFinite(l.unitCost) &&
    l.unitCost >= 0
  );
}

/**
 * Aggregates the received quantities per inventory item, merging duplicate
 * lines for the same item. Throws if any line is malformed.
 */
export function buildStockIncrements(lines: unknown[]): Map<string, number> {
  const increments = new Map<string, number>();
  for (const line of lines) {
    if (!isValidOrderLine(line)) {
      throw new Error('Order contains an invalid line.');
    }
    increments.set(line.itemId, (increments.get(line.itemId) ?? 0) + line.quantity);
  }
  return increments;
}

/** Total cost of an order, rounded to cents. */
export function orderTotal(lines: OrderLine[]): number {
  const total = lines.reduce((sum, l) => sum + l.quantity * l.unitCost, 0);
  return Math.round(total * 100) / 100;
}
