import { Component, OnInit } from '@angular/core';
import { LocalStorageHelper } from 'src/app/helpers/localStorageHelper';
import { ProductService } from 'src/app/services/product/product.service';
import { Cart } from 'src/app/services/cart/cart.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor(public productService : ProductService) { }
  currentCart : Cart[] = [];
  subTotal : number = 0;

  ngOnInit(): void {
    
    let currentCartStorage = LocalStorageHelper.getLocalStorage("itemsOfCart");
    if(this.currentCart != null){
      this.currentCart = JSON.parse(currentCartStorage);
      this.currentCart.forEach(element => {
        this.subTotal += (element.price * element.quantity)
      });
    }
  }
}
