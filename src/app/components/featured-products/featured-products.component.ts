import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {Product} from '../../services/product/product.model';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getListFeaturedProducts();
  }

}
