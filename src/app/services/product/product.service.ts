import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import {URL_RESTAPI} from '../../app.api'
import { Category } from '../category/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  public listProducts: Product[] = []
  public productSeleted: Product = new Product();
  public categorySelected: Category;

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

  getListProductsByCategory(idCategory:number){
    let query: string = 'category='+idCategory;
    this.http.get<Product[]>(URL_RESTAPI+"/products?"+query).subscribe(
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

  getProductsByIds(ids:string[]){
    var query : string = 'id='+ids[0];
    if(ids.length > 1){
      for (let index = 1; index < ids.length; index++){
        query += '&id='+ids[index];
      }
      
    }
    this.http.get<Product[]>(URL_RESTAPI + '/products?'+query).subscribe(
      list =>{
        this.listProducts = list;
      }
    )
  }

  getProdutcsLength(){
    return this.http.get<Product[]>(URL_RESTAPI + '/products');
  }

  updateProduct() {
    throw new Error("Method not implemented.");
  }
  addProduct() {
    this.productSeleted.id = this.listProducts[this.listProducts.length - 1].id + 1;
    this.productSeleted.avaliable = "Yes";
    this.listProducts.push(this.productSeleted)
    this.http.post<Product[]>(URL_RESTAPI + '/products', this.productSeleted).subscribe(
      list => {
        this.getListProducts();
      }
    )
  }

  deleteProduct(id: number) {
    throw new Error("Method not implemented.");
  }

  setProduct(p: Product) {
    this.productSeleted = p;
  }

  newProduct() {
    this.productSeleted = new Product();
  }
}
