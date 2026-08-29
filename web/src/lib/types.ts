export interface Supplier {
  id: string;
  name: string;
  contactName: string;
  email: string;
  phone: string;
  notes: string;
  attachmentPath?: string;
  attachmentName?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  unit: string;
  quantity: number;
  reorderLevel: number;
  costPerUnit: number;
  supplierId: string;
}

export type OrderStatus = 'draft' | 'ordered' | 'received';

export interface OrderLine {
  itemId: string;
  name: string;
  quantity: number;
  unitCost: number;
}

export interface Order {
  id: string;
  supplierId: string;
  supplierName: string;
  status: OrderStatus;
  lines: OrderLine[];
  total: number;
  createdAt?: { toDate(): Date } | null;
  receivedAt?: { toDate(): Date } | null;
}
