import { initializeApp } from 'firebase-admin/app';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';
import { HttpsError, onCall, onRequest } from 'firebase-functions/v2/https';
import { buildStockIncrements, normalizeShopName } from './logic';

initializeApp();
const db = getFirestore();

// invoker: 'public' makes deploys (re)assert the allow-unauthenticated IAM
// binding on the underlying Cloud Run service — but only for onRequest
// functions: the SDK currently drops this option for onCall, and the CLI
// never touches IAM when *updating* callable functions. The deploy workflow
// therefore also asserts the binding on the callable services with gcloud
// after every deploy (see .github/workflows/deploy.yml); a partially failed
// create would otherwise leave a callable returning 403 to browser
// preflights, surfacing as a CORS error. Auth is still enforced in the
// handlers.
const publicInvoker = { invoker: 'public' as const };

/** Simple liveness probe, handy for uptime checks. */
export const health = onRequest(publicInvoker, (_req, res) => {
  res.json({ ok: true, service: 'coffeniya', time: new Date().toISOString() });
});

/**
 * Creates a shop and registers the caller as its owner.
 *
 * Shops are only ever created here (Firestore rules deny client-side shop
 * creation) so ownership and membership stay consistent with users/{uid}.
 */
export const createShop = onCall(publicInvoker, async (request) => {
  const uid = request.auth?.uid;
  if (!uid) {
    throw new HttpsError('unauthenticated', 'Sign in to create a shop.');
  }

  let name: string;
  try {
    name = normalizeShopName(request.data?.name);
  } catch (err) {
    throw new HttpsError('invalid-argument', (err as Error).message);
  }

  const userRef = db.collection('users').doc(uid);
  const shopRef = db.collection('shops').doc();

  await db.runTransaction(async (tx) => {
    const userSnap = await tx.get(userRef);
    if (userSnap.exists && userSnap.get('shopId')) {
      throw new HttpsError('already-exists', 'You already belong to a shop.');
    }
    tx.set(shopRef, {
      name,
      ownerUid: uid,
      members: { [uid]: 'owner' },
      createdAt: FieldValue.serverTimestamp(),
    });
    tx.set(
      userRef,
      {
        email: request.auth?.token.email ?? null,
        shopId: shopRef.id,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true },
    );
  });

  return { shopId: shopRef.id, name };
});

/**
 * Marks an order as received and increments stock levels atomically.
 *
 * Firestore rules block clients from setting an order's status to
 * 'received' directly, so stock arithmetic is always server-authoritative.
 */
export const receiveOrder = onCall(publicInvoker, async (request) => {
  const uid = request.auth?.uid;
  if (!uid) {
    throw new HttpsError('unauthenticated', 'Sign in to receive orders.');
  }

  const { shopId, orderId } = (request.data ?? {}) as {
    shopId?: unknown;
    orderId?: unknown;
  };
  if (typeof shopId !== 'string' || !shopId || typeof orderId !== 'string' || !orderId) {
    throw new HttpsError('invalid-argument', 'shopId and orderId are required.');
  }

  const shopRef = db.collection('shops').doc(shopId);
  const orderRef = shopRef.collection('orders').doc(orderId);

  await db.runTransaction(async (tx) => {
    const shopSnap = await tx.get(shopRef);
    const members = (shopSnap.get('members') ?? {}) as Record<string, string>;
    if (!shopSnap.exists || !members[uid]) {
      throw new HttpsError('permission-denied', 'You are not a member of this shop.');
    }

    const orderSnap = await tx.get(orderRef);
    if (!orderSnap.exists) {
      throw new HttpsError('not-found', 'Order not found.');
    }
    if (orderSnap.get('status') !== 'ordered') {
      throw new HttpsError(
        'failed-precondition',
        'Only orders in the "ordered" state can be received.',
      );
    }

    let increments: Map<string, number>;
    try {
      increments = buildStockIncrements((orderSnap.get('lines') ?? []) as unknown[]);
    } catch (err) {
      throw new HttpsError('failed-precondition', (err as Error).message);
    }
    if (increments.size === 0) {
      throw new HttpsError('failed-precondition', 'Order has no lines to receive.');
    }

    const itemRefs = [...increments.keys()].map((itemId) =>
      shopRef.collection('items').doc(itemId),
    );
    const itemSnaps = await Promise.all(itemRefs.map((ref) => tx.get(ref)));
    for (const snap of itemSnaps) {
      if (!snap.exists) {
        throw new HttpsError('failed-precondition', `Inventory item ${snap.id} no longer exists.`);
      }
    }

    for (const ref of itemRefs) {
      tx.update(ref, {
        quantity: FieldValue.increment(increments.get(ref.id)!),
        updatedAt: FieldValue.serverTimestamp(),
      });
    }
    tx.update(orderRef, {
      status: 'received',
      receivedAt: FieldValue.serverTimestamp(),
      receivedBy: uid,
    });
  });

  return { ok: true };
});
