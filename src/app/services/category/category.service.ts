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
}
