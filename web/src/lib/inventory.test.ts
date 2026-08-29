import { describe, expect, it } from 'vitest';
import {
  formatMoney,
  isLowStock,
  lowStockItems,
  orderTotal,
  parseNonNegativeNumber,
  parsePositiveNumber,
} from './inventory';

describe('isLowStock', () => {
  it('flags items at or below their reorder level', () => {
    expect(isLowStock({ quantity: 2, reorderLevel: 5 })).toBe(true);
    expect(isLowStock({ quantity: 5, reorderLevel: 5 })).toBe(true);
  });

  it('does not flag well-stocked items', () => {
    expect(isLowStock({ quantity: 6, reorderLevel: 5 })).toBe(false);
  });
});

describe('lowStockItems', () => {
  it('filters and sorts by urgency (largest deficit first)', () => {
    const items = [
      { id: 'ok', quantity: 20, reorderLevel: 5 },
      { id: 'low', quantity: 4, reorderLevel: 5 },
      { id: 'critical', quantity: 0, reorderLevel: 10 },
    ];
    expect(lowStockItems(items).map((i) => i.id)).toEqual(['critical', 'low']);
  });

  it('returns an empty array when everything is stocked', () => {
    expect(lowStockItems([{ quantity: 9, reorderLevel: 3 }])).toEqual([]);
  });
});

describe('orderTotal', () => {
  it('sums line totals and rounds to cents', () => {
    expect(
      orderTotal([
        { quantity: 3, unitCost: 0.1 },
        { quantity: 2, unitCost: 9.995 },
      ]),
    ).toBe(20.29);
  });

  it('is zero for an empty order', () => {
    expect(orderTotal([])).toBe(0);
  });
});

describe('formatMoney', () => {
  it('formats as USD', () => {
    expect(formatMoney(1234.5)).toBe('$1,234.50');
  });
});

describe('number parsing', () => {
  it('parsePositiveNumber accepts positive values only', () => {
    expect(parsePositiveNumber('3.5')).toBe(3.5);
    expect(parsePositiveNumber('0')).toBeNull();
    expect(parsePositiveNumber('-1')).toBeNull();
    expect(parsePositiveNumber('abc')).toBeNull();
  });

  it('parseNonNegativeNumber accepts zero', () => {
    expect(parseNonNegativeNumber('0')).toBe(0);
    expect(parseNonNegativeNumber('7')).toBe(7);
    expect(parseNonNegativeNumber('-0.1')).toBeNull();
    expect(parseNonNegativeNumber('')).toBeNull();
  });
});
