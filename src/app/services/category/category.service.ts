import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http';
import {URL_RESTAPI} from '../../app.api'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public listCategories: Category[] = []

  constructor(public http: HttpClient) {   
      this.getListCategories()   
   }

  getListCategories() {
    this.http.get<Category[]>(URL_RESTAPI + '/categories').subscribe(
      list =>{
        this.listCategories = list;
      }
    )
  }
  
  getCategoryById(idCategory: number){
    return this.http.get<Category>(URL_RESTAPI + '/categories/'+idCategory);
  }

  addCategory(cat: Category) {
    this.http.post<Category[]>(URL_RESTAPI + '/categories',cat).subscribe(
      list =>{
       this.getListCategories()
      }
    )
  }

  updateCategory(cat: Category) {
    this.http.put<Category[]>(URL_RESTAPI + '/categories/'+cat.id,cat).subscribe(
      list =>{
       this.getListCategories()
      }
    )
  }

  deleteCategory(id: number) {
    this.http.delete<Category>(URL_RESTAPI + '/categories/'+id).subscribe(
      list =>{
       this.getListCategories()
      }
    )
  }

}
