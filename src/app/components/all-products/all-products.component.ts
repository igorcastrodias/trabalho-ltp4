import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {Product} from '../../services/product/product.model';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getListProducts();
  }
}
