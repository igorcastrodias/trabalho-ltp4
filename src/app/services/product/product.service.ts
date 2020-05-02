import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import {URL_RESTAPI} from '../../app.api'
import { stringify } from 'querystring';

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

  getListProductsSortBy(column : string, asc : boolean) { 
    let query : string = '_sort='+column+'&_order='+ (asc == true ? 'asc' : 'desc');
    this.http.get<Product[]>(URL_RESTAPI + '/products?'+query).subscribe(
      list =>{
        this.listProducts = list;

      }
    )
  }

  getListProductsByCategory(category:string){
    let query: string = 'category='+category;
    this.http.get<Product[]>(URL_RESTAPI+"/products"+query).subscribe(
      list => {
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
