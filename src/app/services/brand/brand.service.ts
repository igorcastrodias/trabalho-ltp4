import { Injectable } from '@angular/core';
import { Brand } from './brand.model';
import { HttpClient } from '@angular/common/http';
import {URL_RESTAPI} from '../../app.api'

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  public listBrands: Brand[] = []

  constructor(public http: HttpClient) {   
      this.getListBrands()   
   }

  getListBrands() {
    
    this.http.get<Brand[]>(URL_RESTAPI + '/brands').subscribe(
      list =>{
        this.listBrands = list;

      }
    )
  }  
}
