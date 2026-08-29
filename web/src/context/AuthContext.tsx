import type { User } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { auth, db } from '../lib/firebase';

interface AuthState {
  user: User | null;
  shopId: string | null;
  /** True while the initial auth + profile lookup is in flight. */
  loading: boolean;
}

const AuthContext = createContext<AuthState>({ user: null, shopId: null, loading: true });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [shopId, setShopId] = useState<string | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [profileReady, setProfileReady] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setAuthReady(true);
      if (!nextUser) {
        setShopId(null);
        setProfileReady(true);
      } else {
        setProfileReady(false);
      }
    });
  }, []);

  // The user's profile document (users/{uid}) carries their shopId. It is
  // written by the createShop callable, so we watch it live: the app moves
  // from "create your shop" to the dashboard as soon as the function runs.
  useEffect(() => {
    if (!user) return;
    const unsubscribe = onSnapshot(
      doc(db, 'users', user.uid),
      (snap) => {
        setShopId((snap.data()?.shopId as string | undefined) ?? null);
        setProfileReady(true);
      },
      () => {
        setShopId(null);
        setProfileReady(true);
      },
    );
    return unsubscribe;
  }, [user]);

  const loading = !authReady || (user !== null && !profileReady);
  return (
    <AuthContext.Provider value={{ user, shopId, loading }}>{children}</AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthState {
  return useContext(AuthContext);
}
