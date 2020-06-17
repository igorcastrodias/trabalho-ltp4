import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from "./pages/product/product.component";
import { HomeComponent } from './pages/home/home.component'
import { ContactComponent } from './pages/contact/contact.component'
import { CollectionComponent } from './pages/collection/collection.component'
import { CartComponent } from './pages/cart/cart.component'
import { CheckoutComponent } from './pages/checkout/checkout.component'
import { ConfirmationComponent } from './pages/confirmation/confirmation.component'
import { LoginComponent } from './pages/login/login.component'
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AuthGuard } from './guard/authguard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'collection', component: CollectionComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'product/:id', component: ProductComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'confirmation', component: ConfirmationComponent},
    {path: 'admin', component: AdminHomeComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
