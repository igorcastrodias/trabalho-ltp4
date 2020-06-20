import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { Dictionary } from 'src/app/helpers/dictionaryHelper';
import { ProductService } from 'src/app/services/product/product.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Product } from 'src/app/services/product/product.model';

@Component({
  selector: 'app-admin-pie-graph',
  templateUrl: './admin-pie-graph.component.html',
  styleUrls: ['./admin-pie-graph.component.css']
})
export class AdminPieGraphComponent implements OnInit {

  constructor(private ordersService: OrderService, private produtctService : ProductService, private categoryService : CategoryService) { }

  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';

  ngOnInit(): void {
    var vendasCategoria = new Dictionary<number>();
    
    this.ordersService.getOrdersLength().toPromise().then( items => {
      items.forEach(orders => {
        orders.cart.forEach(produtct => {
          this.produtctService.getProductById(produtct.idProduct).toPromise().then( itemProduct => {
            console.log(itemProduct);
            this.categoryService.getCategoryById(itemProduct.category).toPromise().then( category => {
              console.log(category);
              if(!vendasCategoria.ContainsKey(category.name)){
                vendasCategoria.Add(category.name,1);
              }else{
                var quantidadeAtual  = vendasCategoria.Item(category.name);
                quantidadeAtual++;
                vendasCategoria.Add(category.name,quantidadeAtual);
              }
            })
          })
        });
      });
      console.log(vendasCategoria.Keys());
      console.log(vendasCategoria.Values());
      this.doughnutChartLabels = vendasCategoria.Keys();

      vendasCategoria.Keys().forEach(key => {
        vendasCategoria.Values().forEach( (valor) => {
          this.doughnutChartData.push({data: valor, label: key});  
        });  
      });
    });
  }

}
