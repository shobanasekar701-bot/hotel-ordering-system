import { CartItem } from './cart-item.model';
import { MenuItem } from './menu-item.model';

export interface OrderItem {
  menuItem: MenuItem;
  quantity: number;
  price?: number;
}
export interface Order {
  id?: number;
  customerName: string;
  mobileNumber: string;
  tableNumber: number;
  items: OrderItem[];
  subtotal: number;
  status: string;
  createdAt?: Date;
}