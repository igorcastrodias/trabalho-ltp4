import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../services/product/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageHelper } from 'src/app/helpers/localStorageHelper';
import { Order } from 'src/app/services/order/order.model';





@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  product: Product
  numero: number

  ngOnInit(): void {
    this.numero = parseInt(this.route.snapshot.params['id']);
    this.productService.getProductById(this.numero).subscribe(product => this.product = product );
  }

  addProductToCart(id:number){
    /* To Do - Criar metodo para guardar itens no carrinho  */
    var currentCart : Order[] = [];
    let currentCartStorage = LocalStorageHelper.getLocalStorage("itemsOfCart");
    
    if(currentCartStorage != null){
      currentCart = JSON.parse(currentCartStorage);
      var atualizouQuanti : Boolean = false;

      for (let index = 0; index < currentCart.length; index++) {
        if(currentCart[index].idProduct == id){
          currentCart[index].quantity++;
          atualizouQuanti = true;
          break;
        }
      }

      //novo item no carrinho
      if(!atualizouQuanti){
        this.adicionarItemCarrinho(currentCart);
      }

    }else{
      this.adicionarItemCarrinho(currentCart);
    }

    console.log(JSON.stringify(currentCart));

    LocalStorageHelper.addLocalStorage("itemsOfCart",JSON.stringify(currentCart));
    this.router.navigate(['/cart']);
  }

  private adicionarItemCarrinho(currentCart: Order[]) {
    var order: Order = new Order();
    order.idProduct = this.product.id;
    order.name = this.product.name;
    order.price = this.product.price;
    order.quantity = 1;
    currentCart.push(order);
  }
}
