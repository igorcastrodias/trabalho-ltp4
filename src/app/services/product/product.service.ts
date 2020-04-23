import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import {URL_RESTAPI} from '../../app.api'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public listProducts: Product[] = []

  constructor(public http: HttpClient) {   
      this.getListProducts()   
   }

  getListProducts() {
    
    this.http.get<Product[]>(URL_RESTAPI + '/products').subscribe(
      list =>{
        this.listProducts = list;

      }
    )
  }

  getListFeaturedProducts(){
    this.http.get<Product[]>(URL_RESTAPI + '/products?featured=Yes').subscribe(
      list =>{
        this.listProducts = list;
      }
    )
  }

  getProductById(id:number){
    return this.http.get<Product>(URL_RESTAPI + '/products/'+id);
  }
  
}
