import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  increment,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { useEffect, useState, type FormEvent } from 'react';
import { StockBadge } from '../components/StockBadge';
import { db } from '../lib/firebase';
import { formatMoney, parseNonNegativeNumber } from '../lib/inventory';
import type { InventoryItem, Supplier } from '../lib/types';

const emptyForm = {
  name: '',
  sku: '',
  unit: 'kg',
  quantity: '0',
  reorderLevel: '0',
  costPerUnit: '0',
  supplierId: '',
};

export function Inventory({ shopId }: { shopId: string }) {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubItems = onSnapshot(
      query(collection(db, 'shops', shopId, 'items'), orderBy('name')),
      (snap) => setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as InventoryItem)),
    );
    const unsubSuppliers = onSnapshot(
      query(collection(db, 'shops', shopId, 'suppliers'), orderBy('name')),
      (snap) => setSuppliers(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Supplier)),
    );
    return () => {
      unsubItems();
      unsubSuppliers();
    };
  }, [shopId]);

  async function handleAdd(event: FormEvent) {
    event.preventDefault();
    setError('');
    const quantity = parseNonNegativeNumber(form.quantity);
    const reorderLevel = parseNonNegativeNumber(form.reorderLevel);
    const costPerUnit = parseNonNegativeNumber(form.costPerUnit);
    if (quantity === null || reorderLevel === null || costPerUnit === null) {
      setError('Quantity, reorder level and cost must be non-negative numbers.');
      return;
    }
    try {
      await addDoc(collection(db, 'shops', shopId, 'items'), {
        name: form.name.trim(),
        sku: form.sku.trim(),
        unit: form.unit.trim() || 'unit',
        quantity,
        reorderLevel,
        costPerUnit,
        supplierId: form.supplierId,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      setForm(emptyForm);
    } catch {
      setError('Could not save the item.');
    }
  }

  async function adjust(item: InventoryItem, delta: number) {
    if (item.quantity + delta < 0) return;
    await updateDoc(doc(db, 'shops', shopId, 'items', item.id), {
      quantity: increment(delta),
      updatedAt: serverTimestamp(),
    });
  }

  const supplierName = (id: string) => suppliers.find((s) => s.id === id)?.name ?? '—';

  return (
    <section>
      <h1>Inventory</h1>
      <div className="card">
        <h2>Add an item</h2>
        <form onSubmit={handleAdd} className="form-grid">
          <label>
            Name
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Espresso beans — house blend"
              required
            />
          </label>
          <label>
            SKU
            <input value={form.sku} onChange={(e) => setForm({ ...form, sku: e.target.value })} />
          </label>
          <label>
            Unit
            <input
              value={form.unit}
              onChange={(e) => setForm({ ...form, unit: e.target.value })}
              placeholder="kg, L, box…"
              required
            />
          </label>
          <label>
            Quantity on hand
            <input
              type="number"
              min="0"
              step="any"
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              required
            />
          </label>
          <label>
            Reorder level
            <input
              type="number"
              min="0"
              step="any"
              value={form.reorderLevel}
              onChange={(e) => setForm({ ...form, reorderLevel: e.target.value })}
              required
            />
          </label>
          <label>
            Cost per unit ($)
            <input
              type="number"
              min="0"
              step="any"
              value={form.costPerUnit}
              onChange={(e) => setForm({ ...form, costPerUnit: e.target.value })}
              required
            />
          </label>
          <label className="span-2">
            Supplier
            <select
              value={form.supplierId}
              onChange={(e) => setForm({ ...form, supplierId: e.target.value })}
            >
              <option value="">No supplier</option>
              {suppliers.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>
          {error && <p className="error span-2">{error}</p>}
          <button type="submit" className="btn btn-primary">
            Add item
          </button>
        </form>
      </div>

      <div className="card">
        <h2>Stock</h2>
        {items.length === 0 ? (
          <p className="muted">No inventory yet — add your first item above.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>SKU</th>
                <th>Stock</th>
                <th>Cost / unit</th>
                <th>Supplier</th>
                <th>Adjust</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td className="muted">{item.sku}</td>
                  <td>
                    <StockBadge
                      quantity={item.quantity}
                      reorderLevel={item.reorderLevel}
                      unit={item.unit}
                    />
                  </td>
                  <td>{formatMoney(item.costPerUnit)}</td>
                  <td className="muted">{supplierName(item.supplierId)}</td>
                  <td className="nowrap">
                    <button type="button" className="btn" onClick={() => void adjust(item, -1)}>
                      −1
                    </button>{' '}
                    <button type="button" className="btn" onClick={() => void adjust(item, 1)}>
                      +1
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => void deleteDoc(doc(db, 'shops', shopId, 'items', item.id))}
                    >
                      Delete
                    </button>
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
