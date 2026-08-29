import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { useAuth } from './context/AuthContext';
import { CreateShop } from './pages/CreateShop';
import { Dashboard } from './pages/Dashboard';
import { Inventory } from './pages/Inventory';
import { Orders } from './pages/Orders';
import { SignIn } from './pages/SignIn';
import { Suppliers } from './pages/Suppliers';

export default function App() {
  const { user, shopId, loading } = useAuth();

  if (loading) {
    return (
      <div className="centered">
        <p>Loading…</p>
      </div>
    );
  }

  if (!user) {
    return (
      <Routes>
        <Route path="*" element={<SignIn />} />
      </Routes>
    );
  }

  if (!shopId) {
    return (
      <Routes>
        <Route path="*" element={<CreateShop />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard shopId={shopId} />} />
        <Route path="/suppliers" element={<Suppliers shopId={shopId} />} />
        <Route path="/inventory" element={<Inventory shopId={shopId} />} />
        <Route path="/orders" element={<Orders shopId={shopId} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
