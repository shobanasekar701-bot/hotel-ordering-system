import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { Order ,OrderItem} from '../../../models/order.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm!: FormGroup;

  cartItems: any[] = [];

  subtotal = 0;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.cartItems = this.cartService.getCartItems();

    this.subtotal = this.cartService.getSubtotal();

    this.checkoutForm = this.fb.group({

      customerName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      mobileNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[6-9][0-9]{9}$')
        ]
      ],

      tableNumber: [
        '',
        [
          Validators.required,
          Validators.min(1),
          Validators.max(50)
        ]
      ]

    });

  }

placeOrder(): void {

  if (this.checkoutForm.invalid) {
    this.checkoutForm.markAllAsTouched();
    return;
  }

  const cartItems = this.cartService.getCartItems();

  const orderItems: OrderItem[] = cartItems.map(item => ({
    menuItem: item.product,
    quantity: item.quantity,
    price: item.product.price
  }));

  const order: Order = {
    customerName: this.checkoutForm.value.customerName,
    mobileNumber: this.checkoutForm.value.mobileNumber,
    tableNumber: this.checkoutForm.value.tableNumber,
    items: orderItems,
    subtotal: this.cartService.getSubtotal(),
    status: 'NEW'
  };

  console.log('Order being sent:', order);

  this.orderService.createOrder(order).subscribe({
    next: (savedOrder: Order) => {

      console.log('Order saved successfully:', savedOrder);

      alert(
        `Order placed successfully!\nOrder ID: ${savedOrder.id}`
      );

      this.cartService.clearCart();

      this.router.navigate(['/menu']);
    },

    error: (error) => {
      console.error('Order creation failed:', error);
      alert('Unable to place order. Please try again.');
    }
  });
}

}