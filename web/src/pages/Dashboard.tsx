import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StockBadge } from '../components/StockBadge';
import { formatMoney, lowStockItems } from '../lib/inventory';
import { db } from '../lib/firebase';
import type { InventoryItem, Order } from '../lib/types';

export function Dashboard({ shopId }: { shopId: string }) {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [openOrders, setOpenOrders] = useState<Order[]>([]);

  useEffect(() => {
    const unsubItems = onSnapshot(collection(db, 'shops', shopId, 'items'), (snap) => {
      setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as InventoryItem));
    });
    const unsubOrders = onSnapshot(
      query(collection(db, 'shops', shopId, 'orders'), where('status', '==', 'ordered')),
      (snap) => {
        setOpenOrders(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Order));
      },
    );
    return () => {
      unsubItems();
      unsubOrders();
    };
  }, [shopId]);

  const low = lowStockItems(items);
  const inventoryValue = items.reduce((sum, i) => sum + i.quantity * i.costPerUnit, 0);

  return (
    <section>
      <h1>Dashboard</h1>
      <div className="stat-row">
        <div className="card stat">
          <span className="stat-value">{items.length}</span>
          <span className="muted">Inventory items</span>
        </div>
        <div className="card stat">
          <span className="stat-value" data-testid="low-stock-count">
            {low.length}
          </span>
          <span className="muted">Low on stock</span>
        </div>
        <div className="card stat">
          <span className="stat-value">{openOrders.length}</span>
          <span className="muted">Orders in transit</span>
        </div>
        <div className="card stat">
          <span className="stat-value">{formatMoney(inventoryValue)}</span>
          <span className="muted">Inventory value</span>
        </div>
      </div>

      <div className="card">
        <h2>Low stock</h2>
        {low.length === 0 ? (
          <p className="muted">Everything is stocked up. ✨</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Stock</th>
                <th>Reorder level</th>
              </tr>
            </thead>
            <tbody>
              {low.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <StockBadge
                      quantity={item.quantity}
                      reorderLevel={item.reorderLevel}
                      unit={item.unit}
                    />
                  </td>
                  <td>
                    {item.reorderLevel} {item.unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <p>
          <Link to="/orders">Create a purchase order →</Link>
        </p>
      </div>
    </section>
  );
}
