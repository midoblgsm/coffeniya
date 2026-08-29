import { describe, expect, it } from 'vitest';
import {
  buildStockIncrements,
  isValidOrderLine,
  normalizeShopName,
  orderTotal,
} from './logic';

describe('normalizeShopName', () => {
  it('trims and collapses whitespace', () => {
    expect(normalizeShopName('  Bean   There  ')).toBe('Bean There');
  });

  it('rejects non-strings', () => {
    expect(() => normalizeShopName(42)).toThrow();
    expect(() => normalizeShopName(null)).toThrow();
  });

  it('rejects names that are too short or too long', () => {
    expect(() => normalizeShopName(' a ')).toThrow();
    expect(() => normalizeShopName('x'.repeat(81))).toThrow();
  });
});

describe('isValidOrderLine', () => {
  it('accepts a well-formed line', () => {
    expect(isValidOrderLine({ itemId: 'a', quantity: 3, unitCost: 12.5 })).toBe(true);
  });

  it('accepts a zero-cost line (free samples)', () => {
    expect(isValidOrderLine({ itemId: 'a', quantity: 1, unitCost: 0 })).toBe(true);
  });

  it('rejects zero or negative quantities', () => {
    expect(isValidOrderLine({ itemId: 'a', quantity: 0, unitCost: 1 })).toBe(false);
    expect(isValidOrderLine({ itemId: 'a', quantity: -2, unitCost: 1 })).toBe(false);
  });

  it('rejects missing or malformed fields', () => {
    expect(isValidOrderLine(null)).toBe(false);
    expect(isValidOrderLine({ itemId: '', quantity: 1, unitCost: 1 })).toBe(false);
    expect(isValidOrderLine({ itemId: 'a', quantity: NaN, unitCost: 1 })).toBe(false);
    expect(isValidOrderLine({ itemId: 'a', quantity: 1, unitCost: -1 })).toBe(false);
    expect(isValidOrderLine({ itemId: 'a', quantity: '1', unitCost: 1 })).toBe(false);
  });
});

describe('buildStockIncrements', () => {
  it('sums quantities per item across duplicate lines', () => {
    const increments = buildStockIncrements([
      { itemId: 'beans', quantity: 5, unitCost: 10 },
      { itemId: 'milk', quantity: 2, unitCost: 3 },
      { itemId: 'beans', quantity: 3, unitCost: 10 },
    ]);
    expect(increments.get('beans')).toBe(8);
    expect(increments.get('milk')).toBe(2);
    expect(increments.size).toBe(2);
  });

  it('throws on malformed lines', () => {
    expect(() => buildStockIncrements([{ itemId: 'beans', quantity: 0, unitCost: 1 }])).toThrow();
    expect(() => buildStockIncrements(['nope'])).toThrow();
  });

  it('returns an empty map for no lines', () => {
    expect(buildStockIncrements([]).size).toBe(0);
  });
});

describe('orderTotal', () => {
  it('sums line totals and rounds to cents', () => {
    expect(
      orderTotal([
        { itemId: 'a', quantity: 3, unitCost: 0.1 },
        { itemId: 'b', quantity: 1, unitCost: 19.99 },
      ]),
    ).toBe(20.29);
  });

  it('is zero for an empty order', () => {
    expect(orderTotal([])).toBe(0);
  });
});
