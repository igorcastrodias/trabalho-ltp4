import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../services/product/product.model';
import { ActivatedRoute, Router } from '@angular/router';



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
    console.log("carregou o componente");
    this.numero = parseInt(this.route.snapshot.params['id']);
    this.productService.getProductById(this.numero).subscribe(product => this.product = product );
  }

  addProductToCart(id:number){
	  let existing = localStorage.getItem(name);
	  let existingArray = existing ? existing.split(',') : [];
	  existingArray.push(id.toString());
	  localStorage.setItem(name, existingArray.toString());
    this.router.navigate(['/cart']);
  }
}
