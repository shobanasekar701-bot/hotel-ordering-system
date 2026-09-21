import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Order } from '../../models/order.model';
import { OrderService } from '../../core/services/order.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  order?: Order;

  discount = 0;
  gstRate = 5;

  gst = 0;
  grandTotal = 0;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {

    const orderId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.loadOrder(orderId);
  }

  loadOrder(orderId: number): void {

    this.orderService.getOrder(orderId).subscribe({
      next: (order: Order) => {

        this.order = order;

        this.calculateBill();

      },

      error: (error) => {
        console.error('Failed to load order:', error);
      }
    });
  }

  calculateBill(): void {

    if (!this.order) {
      return;
    }

    const taxableAmount =
      this.order.subtotal - this.discount;

    this.gst =
      taxableAmount * this.gstRate / 100;

    this.grandTotal =
      taxableAmount + this.gst;
  }

  applyDiscount(): void {
    this.calculateBill();
  }

  printBill(): void {
    window.print();
  }
}