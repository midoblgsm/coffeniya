import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';
import { useEffect, useMemo, useState } from 'react';
import { db, functions } from '../lib/firebase';
import { formatMoney, orderTotal, parsePositiveNumber } from '../lib/inventory';
import type { InventoryItem, Order, OrderLine, Supplier } from '../lib/types';

export function Orders({ shopId }: { shopId: string }) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  const [supplierId, setSupplierId] = useState('');
  const [lines, setLines] = useState<OrderLine[]>([]);
  const [lineItemId, setLineItemId] = useState('');
  const [lineQty, setLineQty] = useState('1');
  const [error, setError] = useState('');
  const [busyOrderId, setBusyOrderId] = useState('');

  useEffect(() => {
    const unsubOrders = onSnapshot(
      query(collection(db, 'shops', shopId, 'orders'), orderBy('createdAt', 'desc')),
      (snap) => setOrders(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Order)),
    );
    const unsubItems = onSnapshot(
      query(collection(db, 'shops', shopId, 'items'), orderBy('name')),
      (snap) => setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as InventoryItem)),
    );
    const unsubSuppliers = onSnapshot(
      query(collection(db, 'shops', shopId, 'suppliers'), orderBy('name')),
      (snap) => setSuppliers(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Supplier)),
    );
    return () => {
      unsubOrders();
      unsubItems();
      unsubSuppliers();
    };
  }, [shopId]);

  const draftTotal = useMemo(() => orderTotal(lines), [lines]);

  function addLine() {
    setError('');
    const item = items.find((i) => i.id === lineItemId);
    const quantity = parsePositiveNumber(lineQty);
    if (!item || quantity === null) {
      setError('Pick an item and a positive quantity.');
      return;
    }
    setLines((prev) => [
      ...prev,
      { itemId: item.id, name: item.name, quantity, unitCost: item.costPerUnit },
    ]);
    setLineItemId('');
    setLineQty('1');
  }

  async function placeOrder() {
    setError('');
    const supplier = suppliers.find((s) => s.id === supplierId);
    if (!supplier) {
      setError('Pick a supplier for this order.');
      return;
    }
    if (lines.length === 0) {
      setError('Add at least one line to the order.');
      return;
    }
    try {
      await addDoc(collection(db, 'shops', shopId, 'orders'), {
        supplierId: supplier.id,
        supplierName: supplier.name,
        status: 'ordered',
        lines,
        total: draftTotal,
        createdAt: serverTimestamp(),
      });
      setLines([]);
      setSupplierId('');
    } catch {
      setError('Could not place the order.');
    }
  }

  async function receive(order: Order) {
    setError('');
    setBusyOrderId(order.id);
    try {
      await httpsCallable(functions, 'receiveOrder')({ shopId, orderId: order.id });
    } catch (err) {
      setError((err as Error).message || 'Could not receive the order.');
    } finally {
      setBusyOrderId('');
    }
  }

  return (
    <section>
      <h1>Purchase orders</h1>
      <div className="card">
        <h2>New order</h2>
        <div className="stack">
          <label>
            Supplier
            <select value={supplierId} onChange={(e) => setSupplierId(e.target.value)}>
              <option value="">Choose a supplier…</option>
              {suppliers.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>

          <div className="line-editor">
            <label>
              Item
              <select value={lineItemId} onChange={(e) => setLineItemId(e.target.value)}>
                <option value="">Choose an item…</option>
                {items.map((i) => (
                  <option key={i.id} value={i.id}>
                    {i.name} ({formatMoney(i.costPerUnit)}/{i.unit})
                  </option>
                ))}
              </select>
            </label>
            <label>
              Quantity
              <input
                type="number"
                min="0"
                step="any"
                value={lineQty}
                onChange={(e) => setLineQty(e.target.value)}
              />
            </label>
            <button type="button" className="btn" onClick={addLine}>
              Add line
            </button>
          </div>

          {lines.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Unit cost</th>
                  <th>Line total</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {lines.map((line, index) => (
                  <tr key={`${line.itemId}-${index}`}>
                    <td>{line.name}</td>
                    <td>{line.quantity}</td>
                    <td>{formatMoney(line.unitCost)}</td>
                    <td>{formatMoney(line.quantity * line.unitCost)}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-ghost"
                        onClick={() => setLines(lines.filter((_, i) => i !== index))}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={3}>
                    <strong>Total</strong>
                  </td>
                  <td colSpan={2}>
                    <strong>{formatMoney(draftTotal)}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          )}

          {error && <p className="error">{error}</p>}
          <button type="button" className="btn btn-primary" onClick={() => void placeOrder()}>
            Place order
          </button>
        </div>
      </div>

      <div className="card">
        <h2>Order history</h2>
        {orders.length === 0 ? (
          <p className="muted">No orders yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Supplier</th>
                <th>Lines</th>
                <th>Total</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.supplierName}</td>
                  <td className="muted">
                    {order.lines.map((l) => `${l.name} × ${l.quantity}`).join(', ')}
                  </td>
                  <td>{formatMoney(order.total)}</td>
                  <td>
                    <span className={`badge badge-${order.status}`}>{order.status}</span>
                  </td>
                  <td className="nowrap">
                    {order.status === 'ordered' && (
                      <button
                        type="button"
                        className="btn btn-primary"
                        disabled={busyOrderId === order.id}
                        onClick={() => void receive(order)}
                      >
                        {busyOrderId === order.id ? 'Receiving…' : 'Mark received'}
                      </button>
                    )}
                    {order.status !== 'received' && (
                      <>
                        {' '}
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() =>
                            void deleteDoc(doc(db, 'shops', shopId, 'orders', order.id))
                          }
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
