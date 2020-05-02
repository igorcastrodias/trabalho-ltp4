import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../services/product/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageHelper } from 'src/app/helpers/localStorageHelper';




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
    LocalStorageHelper.addLocalStorage("itemsOfCart",id.toString());
    this.router.navigate(['/cart']);
  }
}
