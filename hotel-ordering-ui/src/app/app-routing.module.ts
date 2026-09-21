import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './features/menu/menu.component';
import { CartComponent } from './features/cart/cart.component';
import { CheckoutComponent } from './features/order/checkout/checkout.component';
import { KitchenComponent } from './features/kitchen/kitchen.component';
import { BillingComponent } from './features/billing/billing.component';
import { OrderTrackingComponent } from './features/order-tracking/order-tracking.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'kitchen',
    component: KitchenComponent
  },

  {
    path: 'order-tracking/:id',
    component: OrderTrackingComponent
  },
  {
    path: 'billing/:id',
    component: BillingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
