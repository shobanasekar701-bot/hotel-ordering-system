import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../../models/menu-item.model'; 
import { CartItem } from '../../models/cart-item.model'; 

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];

  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  cartItems$ = this.cartSubject.asObservable();

  constructor() {}

  addToCart(product: MenuItem): void {

    const existingItem = this.cartItems.find(
      item => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({
        product: product,
        quantity: 1
      });
    }

    this.updateCart();
  }

  increaseQuantity(productId: number): void {

    const item = this.cartItems.find(
      cartItem => cartItem.product.id === productId
    );

    if (item) {
      item.quantity++;
      this.updateCart();
    }
  }

  decreaseQuantity(productId: number): void {

    const item = this.cartItems.find(
      cartItem => cartItem.product.id === productId
    );

    if (item) {

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromCart(productId);
        return;
      }

      this.updateCart();
    }
  }

  removeFromCart(productId: number): void {

    this.cartItems = this.cartItems.filter(
      item => item.product.id !== productId
    );

    this.updateCart();
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  getCartCount(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

  getSubtotal(): number {
    return this.cartItems.reduce(
      (total, item) =>
        total + item.product.price * item.quantity,
      0
    );
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCart();
  }

  private updateCart(): void {
    this.cartSubject.next([...this.cartItems]);
  }
}