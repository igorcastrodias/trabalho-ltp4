import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service'
import { ProductService } from 'src/app/services/product/product.service';


@Component({
  selector: 'app-browse-categories',
  templateUrl: './browse-categories.component.html',
  styleUrls: ['./browse-categories.component.css']
})
export class BrowseCategoriesComponent implements OnInit {

  constructor(public categoryService : CategoryService, private productService :  ProductService) { }

  ngOnInit(): void {
    this.categoryService.getListCategories()
  }

  filtrarPorCategoria(idCategoria: number){
    if(idCategoria === 0 ){
      this.productService.getListProducts();
    }else{
      this.productService.getListProductsByCategory(idCategoria);
    }
  }

}
