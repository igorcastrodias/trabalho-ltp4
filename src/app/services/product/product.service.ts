import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public listProducts: Product[] = []

  constructor(public http: HttpClient) {   
      this.getListProducts()   
   }

  getListProducts() {
    
    this.http.get<Product[]>('http://localhost:3000/products').subscribe(
      list =>{
        this.listProducts = list;

      }
    )
  }

  getListFeaturedProducts(){
    this.http.get<Product[]>('http://localhost:3000/products?featured=Yes').subscribe(
      list =>{
        this.listProducts = list;
      }
    )
  }

  getProductById(id:number){
    console.log(this.http.get<Product>('http://localhost:3000/products/'+id));
    return this.http.get<Product>('http://localhost:3000/products/'+id);
  }
  
}
