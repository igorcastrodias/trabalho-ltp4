import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


import { ProductService } from '../../services/product/product.service'
import { Product } from '../../services/product/product.model'


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

  addProduct(id:number){
	  let existing = localStorage.getItem(name);
	  let existingArray = existing ? existing.split(',') : [];
	  existingArray.push(id.toString());
	  localStorage.setItem(name, existingArray.toString());
    this.router.navigate(['/checkout']);
  }
}
