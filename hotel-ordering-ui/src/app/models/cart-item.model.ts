import { MenuItem } from './menu-item.model';

export interface CartItem {
  product: MenuItem;
  quantity: number;
}