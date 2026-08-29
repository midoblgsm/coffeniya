import { signOut } from 'firebase/auth';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { auth } from '../lib/firebase';

export function Layout() {
  const { user } = useAuth();
  return (
    <div className="app">
      <header className="topbar">
        <span className="brand">☕ Coffeniya</span>
        <nav>
          <NavLink to="/" end>
            Dashboard
          </NavLink>
          <NavLink to="/inventory">Inventory</NavLink>
          <NavLink to="/suppliers">Suppliers</NavLink>
          <NavLink to="/orders">Orders</NavLink>
        </nav>
        <div className="topbar-user">
          <span className="muted">{user?.email}</span>
          <button type="button" className="btn btn-ghost" onClick={() => void signOut(auth)}>
            Sign out
          </button>
        </div>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
