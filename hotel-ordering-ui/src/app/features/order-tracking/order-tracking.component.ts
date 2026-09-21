import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval } from 'rxjs';

import { Order } from '../../models/order.model';
import { OrderService } from '../../core/services/order.service';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.scss']
})
export class OrderTrackingComponent implements OnInit {

  order?: Order;
  loading = true;
  private statusSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    const orderId = Number(this.route.snapshot.paramMap.get('id'));

    this.loadOrder(orderId);
    this.statusSubscription = interval(5000).subscribe(() => {
      this.loadOrder(orderId);
    });
  }

  loadOrder(orderId: number): void {

    this.orderService.getOrder(orderId).subscribe({
      next: (order: Order) => {
        this.order = order;
        this.loading = false;

        console.log('Tracked order:', order);
      },
      error: (error) => {
        console.error('Failed to load order:', error);
        this.loading = false;
      }
    });
  }
}