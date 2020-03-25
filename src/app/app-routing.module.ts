import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component'
import { HomeComponent } from './pages/home/home.component'
import { ContactComponent } from './pages/contact/contact.component'
import { CollectionComponent } from './pages/collection/collection.component'
import { CartComponent } from './pages/cart/cart.component'
import { CheckoutComponent } from './pages/checkout/checkout.component'
import { ConfirmationComponent } from './pages/confirmation/confirmation.component'

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'collection', component: CollectionComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'product/:id', component: ProductDetailComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'confirmation', component: ConfirmationComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
