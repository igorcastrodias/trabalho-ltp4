import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Panels } from 'src/app/services/panels/panel.model';
import { OrderService } from 'src/app/services/order/order.service';
import { Dictionary } from 'src/app/helpers/dictionaryHelper';

@Component({
  selector: 'app-admin-panels',
  templateUrl: './admin-panels.component.html',
  styleUrls: ['./admin-panels.component.css']
})
export class AdminPanelsComponent implements OnInit {

  paineis : Panels[] = [];

    
  constructor(private productsService: ProductService, private ordersService: OrderService) { 
    this.productsService.getListProducts();
  }

  ngOnInit(): void {

    this.getProductsLength();
    this.getOrdersLength();

    var quantiUsersOnline = Math.floor(Math.random() * (100 - 1) + 1);
    var item = new Panels();
    item.name = 'Total de Usuários Online',
    item.count = quantiUsersOnline.toString(),
    item.icon = 'ion ion-pie-graph',
    item.color = 'small-box bg-light',
    this.paineis.push(item);


 
  }

  getProductsLength(){
    this.productsService.getProdutcsLength().subscribe( items => {
      var item = new Panels();
      item.name = 'Total de Produtos',
      item.count = items.length.toString(),
      item.icon = 'ion ion-bag',
      item.color = 'small-box bg-info',
      this.paineis.push(item);
    });
  }

  getOrdersLength(){
    this.ordersService.getOrdersLength().subscribe( items => {
      var itemOrderLength = new Panels();
      itemOrderLength.name = 'Total de Vendas',
      itemOrderLength.count = items.length.toString(),
      itemOrderLength.icon = 'ion ion-stats-bars',
      itemOrderLength.color = 'small-box bg-success',
      this.paineis.push(itemOrderLength);

      var clientesDistinct = new Dictionary<Number>();
      items.forEach(element => {
        if(!clientesDistinct.ContainsKey(element.email.toString())){
          clientesDistinct.Add(element.email.toString(),1)
        }
      });

      var itemClientsLength = new Panels();
      itemClientsLength.name = 'Total de Clientes',
      itemClientsLength.count = clientesDistinct.Count().toString(),
      itemClientsLength.icon = 'ion ion-person-add',
      itemClientsLength.color = 'small-box bg-warning',
      this.paineis.push(itemClientsLength);

    });
  }

}
