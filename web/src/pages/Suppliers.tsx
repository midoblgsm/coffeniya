import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { db, storage } from '../lib/firebase';
import type { Supplier } from '../lib/types';

const emptyForm = { name: '', contactName: '', email: '', phone: '', notes: '' };

export function Suppliers({ shopId }: { shopId: string }) {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'shops', shopId, 'suppliers'), orderBy('name'));
    return onSnapshot(q, (snap) => {
      setSuppliers(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Supplier));
    });
  }, [shopId]);

  async function handleAdd(event: FormEvent) {
    event.preventDefault();
    setError('');
    try {
      await addDoc(collection(db, 'shops', shopId, 'suppliers'), {
        ...form,
        name: form.name.trim(),
        createdAt: serverTimestamp(),
      });
      setForm(emptyForm);
    } catch {
      setError('Could not save the supplier.');
    }
  }

  async function handleUpload(supplier: Supplier, event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setError('');
    try {
      const path = `shops/${shopId}/suppliers/${supplier.id}/${file.name}`;
      await uploadBytes(ref(storage, path), file);
      await updateDoc(doc(db, 'shops', shopId, 'suppliers', supplier.id), {
        attachmentPath: path,
        attachmentName: file.name,
      });
    } catch {
      setError('Could not upload the file.');
    } finally {
      event.target.value = '';
    }
  }

  async function handleDownload(supplier: Supplier) {
    if (!supplier.attachmentPath) return;
    const url = await getDownloadURL(ref(storage, supplier.attachmentPath));
    window.open(url, '_blank', 'noopener');
  }

  return (
    <section>
      <h1>Suppliers</h1>
      <div className="card">
        <h2>Add a supplier</h2>
        <form onSubmit={handleAdd} className="form-grid">
          <label>
            Name
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Roastery name"
              required
            />
          </label>
          <label>
            Contact person
            <input
              value={form.contactName}
              onChange={(e) => setForm({ ...form, contactName: e.target.value })}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>
          <label>
            Phone
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </label>
          <label className="span-2">
            Notes
            <input
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Delivery days, minimums…"
            />
          </label>
          {error && <p className="error span-2">{error}</p>}
          <button type="submit" className="btn btn-primary">
            Add supplier
          </button>
        </form>
      </div>

      <div className="card">
        <h2>Your suppliers</h2>
        {suppliers.length === 0 ? (
          <p className="muted">No suppliers yet — add your first one above.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Notes</th>
                <th>Documents</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {suppliers.map((s) => (
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>
                    <div>{s.contactName}</div>
                    <div className="muted">
                      {s.email}
                      {s.email && s.phone ? ' · ' : ''}
                      {s.phone}
                    </div>
                  </td>
                  <td className="muted">{s.notes}</td>
                  <td>
                    {s.attachmentName ? (
                      <button
                        type="button"
                        className="btn btn-ghost"
                        onClick={() => void handleDownload(s)}
                      >
                        📎 {s.attachmentName}
                      </button>
                    ) : (
                      <span className="muted">—</span>
                    )}
                    <label className="btn btn-ghost file-btn">
                      Upload
                      <input type="file" hidden onChange={(e) => void handleUpload(s, e)} />
                    </label>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => void deleteDoc(doc(db, 'shops', shopId, 'suppliers', s.id))}
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
