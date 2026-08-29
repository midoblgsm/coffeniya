import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { StockBadge } from './StockBadge';

describe('StockBadge', () => {
  it('shows "In stock" when above the reorder level', () => {
    render(<StockBadge quantity={12} reorderLevel={5} unit="kg" />);
    expect(screen.getByText(/12 kg · In stock/)).toBeInTheDocument();
  });

  it('shows "Low stock" at or below the reorder level', () => {
    render(<StockBadge quantity={5} reorderLevel={5} unit="kg" />);
    expect(screen.getByText(/Low stock/)).toBeInTheDocument();
  });

  it('shows "Out of stock" at zero', () => {
    render(<StockBadge quantity={0} reorderLevel={5} unit="kg" />);
    expect(screen.getByText(/Out of stock/)).toBeInTheDocument();
  });
});
