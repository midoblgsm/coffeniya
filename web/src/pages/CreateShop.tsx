import { signOut } from 'firebase/auth';
import { httpsCallable } from 'firebase/functions';
import { useState, type FormEvent } from 'react';
import { auth, functions } from '../lib/firebase';

export function CreateShop() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError('');
    setBusy(true);
    try {
      // The AuthContext watches users/{uid}; once the function writes the
      // shopId the app routes to the dashboard automatically.
      await httpsCallable(functions, 'createShop')({ name });
    } catch (err) {
      setError((err as Error).message || 'Could not create the shop.');
      setBusy(false);
    }
  }

  return (
    <div className="centered">
      <div className="card auth-card">
        <h1>Set up your shop</h1>
        <p className="muted">Give your coffee shop a name to get started.</p>
        <form onSubmit={handleSubmit} className="stack">
          <label>
            Shop name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Bean There Espresso"
              minLength={2}
              maxLength={80}
              required
            />
          </label>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn btn-primary" disabled={busy}>
            {busy ? 'Creating…' : 'Create shop'}
          </button>
        </form>
        <button type="button" className="btn btn-ghost" onClick={() => void signOut(auth)}>
          Sign out
        </button>
      </div>
    </div>
  );
}
