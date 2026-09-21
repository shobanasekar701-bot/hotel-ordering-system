import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './features/menu/menu.component';
import { CartComponent } from './features/cart/cart.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CheckoutComponent } from './features/order/checkout/checkout.component';
import { KitchenComponent } from './features/kitchen/kitchen.component';
import { OrderTrackingComponent } from './features/order-tracking/order-tracking.component';
import { BillingComponent } from './features/billing/billing.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CartComponent,
    NavbarComponent,
    CheckoutComponent,
    KitchenComponent,
    OrderTrackingComponent,
    BillingComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}