import { Component, OnInit } from '@angular/core';
import { Category } from '../../services/category/category.model'
import { CategoryService } from '../../services/category/category.service'

@Component({
  selector: 'app-browse-categories',
  templateUrl: './browse-categories.component.html',
  styleUrls: ['./browse-categories.component.css']
})
export class BrowseCategoriesComponent implements OnInit {

  constructor(public categoryService : CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getListCategories()
  }

}
