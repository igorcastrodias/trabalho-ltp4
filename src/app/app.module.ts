import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from "./guard/authguard";
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
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
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AdminSidebarLeftComponent } from './components/admin/admin-sidebar-left/admin-sidebar-left.component';
import { AdminFooterComponent } from './components/admin/admin-footer/admin-footer.component';
import { AdminPanelsComponent } from './components/admin/admin-panels/admin-panels.component';
import { AdminBarGraphComponent } from './components/admin/admin-bar-graph/admin-bar-graph.component';
import { AdminPieGraphComponent } from './components/admin/admin-pie-graph/admin-pie-graph.component';
import { AdminLineGraphComponent } from './components/admin/admin-line-graph/admin-line-graph.component';
import { AdminCategoryComponent } from './components/admin/admin-category/admin-category.component';
import { AdminProductComponent } from './components/admin/admin-product/admin-product.component';
import { AdminPageCategoryComponent } from './pages/admin/admin-page-category/admin-page-category.component';
import { AdminPageProductComponent } from './pages/admin/admin-page-product/admin-page-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    BrowseBrandsComponent,
    AllProductsComponent,
    ProductDetailComponent,
    ProductComponent,
    AdminHomeComponent,
    AdminSidebarLeftComponent,
    AdminFooterComponent,
    AdminPanelsComponent,
    AdminBarGraphComponent,
    AdminPieGraphComponent,
    AdminLineGraphComponent,
    AdminCategoryComponent,
    AdminProductComponent,
    AdminPageCategoryComponent,
    AdminPageProductComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
