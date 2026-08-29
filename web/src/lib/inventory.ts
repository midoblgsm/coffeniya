import type { InventoryItem, OrderLine } from './types';

/** An item is low on stock when it is at or below its reorder level. */
export function isLowStock(item: Pick<InventoryItem, 'quantity' | 'reorderLevel'>): boolean {
  return item.quantity <= item.reorderLevel;
}

/** Low-stock items, most urgent (largest deficit relative to reorder level) first. */
export function lowStockItems<T extends Pick<InventoryItem, 'quantity' | 'reorderLevel'>>(
  items: T[],
): T[] {
  return items
    .filter(isLowStock)
    .sort((a, b) => a.quantity - a.reorderLevel - (b.quantity - b.reorderLevel));
}

/** Total cost of an order, rounded to cents. */
export function orderTotal(lines: Pick<OrderLine, 'quantity' | 'unitCost'>[]): number {
  const total = lines.reduce((sum, l) => sum + l.quantity * l.unitCost, 0);
  return Math.round(total * 100) / 100;
}

export function formatMoney(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

/** Parses a positive number from form input; returns null when invalid. */
export function parsePositiveNumber(raw: string): number | null {
  if (raw.trim() === '') return null;
  const value = Number(raw);
  if (!Number.isFinite(value) || value <= 0) return null;
  return value;
}

/** Parses a non-negative number from form input; returns null when invalid. */
export function parseNonNegativeNumber(raw: string): number | null {
  if (raw.trim() === '') return null;
  const value = Number(raw);
  if (!Number.isFinite(value) || value < 0) return null;
  return value;
}
