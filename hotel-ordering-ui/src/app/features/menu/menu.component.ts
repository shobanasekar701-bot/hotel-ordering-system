import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { CartService } from '../../core/services/cart.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
constructor(
  private cartService: CartService
) {}
  menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Chicken Biryani',
      description: 'Aromatic basmati rice with chicken',
      price: 180,
      imageUrl: 'assets/images/chicken-biryani.jpg',
      category: 'Main Course',
      isAvailable: true
    },
    {
      id: 2,
      name: 'Paneer Butter Masala',
      description: 'Paneer cooked in creamy tomato gravy',
      price: 160,
      imageUrl: 'assets/images/paneer.jpg',
      category: 'Main Course',
      isAvailable: true
    },
     {
      id: 3,
      name: 'Fresh Lime',
      description: 'Fresh lime juice',
      price: 60,
      category: 'Drinks',
      imageUrl: 'assets/images/lime.jpg',
      isAvailable: true
    },
    {
      id: 4,
      name: 'Veg Fried Rice',
      description: 'Chinese style vegetable fried rice',
      price: 140,
      category: 'Main Course',
      imageUrl: 'assets/images/fried-rice.jpg',
      isAvailable: true
    }
  ];

 addToCart(item: MenuItem): void {
  this.cartService.addToCart(item);
}
}