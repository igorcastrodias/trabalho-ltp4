import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor(public productSerivce : ProductService) { }

  ngOnInit(): void {
  }

  trocarOrdenacaoItens(value:string){
    switch(value){
      case "2": this.productSerivce.getListProductsSortBy("price",true);
      break;
      case "3": this.productSerivce.getListProductsSortBy("price",false);
      break;
      default:this.productSerivce.getListProducts();
        break;
    }

  }

}
