import { isLowStock } from '../lib/inventory';

interface StockBadgeProps {
  quantity: number;
  reorderLevel: number;
  unit: string;
}

/** Colored stock-level indicator used in the inventory table and dashboard. */
export function StockBadge({ quantity, reorderLevel, unit }: StockBadgeProps) {
  const low = isLowStock({ quantity, reorderLevel });
  const out = quantity <= 0;
  const label = out ? 'Out of stock' : low ? 'Low stock' : 'In stock';
  const className = out ? 'badge badge-danger' : low ? 'badge badge-warning' : 'badge badge-ok';
  return (
    <span className={className} title={`Reorder at ${reorderLevel} ${unit}`}>
      {quantity} {unit} · {label}
    </span>
  );
}
