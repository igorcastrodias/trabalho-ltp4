import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageHelper } from 'src/app/helpers/localStorageHelper';
import { Cart } from 'src/app/services/cart/cart.model';
import { Product } from 'src/app/services/product/product.model';
import { ProductService } from 'src/app/services/product/product.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/services/category/category.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, private categoryService: CategoryService) { }

  product: Product
  numero: number
  category: Category;

  ngOnInit(): void {
    this.numero = parseInt(this.route.snapshot.params['id']);
    this.productService.getProductById(this.numero).subscribe(product => {
      this.product = product;
      this.categoryService.getCategoryById(product.category).subscribe(category => {
        this.category = category;
      })
    });
    
  }

  addProductToCart(id:number){
    /* To Do - Criar metodo para guardar itens no carrinho  */
    var currentCart : Cart[] = [];
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

    LocalStorageHelper.addLocalStorage("itemsOfCart",JSON.stringify(currentCart));
    this.router.navigate(['/cart']);
  }

  private adicionarItemCarrinho(currentCart: Cart[]) {
    var order: Cart = new Cart();
    order.idProduct = this.product.id;
    order.name = this.product.name;
    order.price = this.product.price;
    order.quantity = 1;
    currentCart.push(order);
  }

}
