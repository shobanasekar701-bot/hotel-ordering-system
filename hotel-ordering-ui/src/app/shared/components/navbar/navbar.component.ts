import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  cartCount = 0;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {

    this.cartService.cartItems$
      .subscribe(items => {

        this.cartCount = items.reduce(
          (total, item) => total + item.quantity,
          0
        );

      });

  }

}