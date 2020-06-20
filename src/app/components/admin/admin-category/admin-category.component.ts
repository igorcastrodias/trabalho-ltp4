import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/services/category/category.model';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  constructor(public categoryService: CategoryService) { }

  selectCategory: Category = new Category();

  ngOnInit(): void {
  }

  setCategory(cat: Category) {
    this.selectCategory = cat;
  }

  newCategory() {
    this.selectCategory = new Category;
  }

  save() {
    if (this.selectCategory.id == 0) {
      this.categoryService.addCategory(this.selectCategory)
    } else {
      this.categoryService.updateCategory(this.selectCategory)
    }
  }

}
