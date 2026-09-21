import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { OrderService } from '../../core/services/order.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getAllOrders().subscribe({
      next: (orders: Order[]) => {
        this.orders = orders;
        console.log('Kitchen orders:', orders);
      },
      error: (error) => {
        console.error('Failed to load orders:', error);
      }
    });
  }
  updateStatus(order: Order, status: string): void {

  if (!order.id) {
    return;
  }

  this.orderService.updateOrderStatus(order.id, status).subscribe({
    next: (updatedOrder: Order) => {
      order.status = updatedOrder.status;
      console.log('Order status updated:', updatedOrder);
    },
    error: (error) => {
      console.error('Failed to update order status:', error);
    }
  });
}
}