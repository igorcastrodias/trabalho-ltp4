import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  constructor(public categoryService: CategoryService, public productService: ProductService) { }

  ngOnInit(): void {
    this.categoryService.getListCategories();
  }

  changeCategory() {   
    this.productService.getListProductsByCategory(this.productService.categorySelected.id);
  }

  save(){
    if (this.productService.productSeleted.id == 0) {
      this.productService.addProduct();
    }else{
      this.productService.updateProduct()
    }
  }

}
