import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageHelper } from 'src/app/helpers/localStorageHelper';
import { ProductService } from 'src/app/services/product/product.service';
import { Cart } from 'src/app/services/cart/cart.model';
import { Order } from 'src/app/services/order/order.model';
import { OrderService } from 'src/app/services/order/order.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public productService : ProductService, private orderSerivce: OrderService, private fb: FormBuilder) { }

  currentCart : Cart[] = [];
  subTotal : number = 0;

  checkoutForm = this.fb.group({
    firstName: ['Primeiro Nome',Validators.required],
    lastName: ['Último Nome',Validators.required],
    phoneNumber: ['Telefone Celular',Validators.required],
    email: ['Email',Validators.required]
  });


  ngOnInit(): void {
    let currentCartStorage = LocalStorageHelper.getLocalStorage("itemsOfCart");
    if(this.currentCart != null){
      this.currentCart = JSON.parse(currentCartStorage);
      this.currentCart.forEach(element => {
        this.subTotal += (element.price * element.quantity)
      });
    }
  }

  onSubmit() {
    if(this.checkoutForm.valid){
      var order : Order;
      order = new Order(this.checkoutForm.value)
      order.id = null;
      order.cart = this.currentCart;
      order.date = new Date().toISOString();
      order.total = this.subTotal;
      console.log(order);
      this.orderSerivce.createOrder(order).subscribe(arg => console.log(arg));

    }else{
      alert("Favor preencher os campos corretamente");
    }
    
  }

}
