import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { BrowseCategoriesComponent } from './components/browse-categories/browse-categories.component';
import { BrowseBrandsComponent } from './components/browse-brands/browse-brands.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    CollectionComponent,
    ConfirmationComponent,
    ContactComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    SubscriptionComponent,
    FeaturedProductsComponent,
    BrowseCategoriesComponent,
    BrowseBrandsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
