import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {URL_RESTAPI} from '../../app.api'
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(public http: HttpClient) {    

  }  

  createOrder(order: Order){
      return this.http.post<Order>(URL_RESTAPI + '/orders',order);
  }

}
