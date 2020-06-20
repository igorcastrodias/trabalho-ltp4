import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { Dictionary } from 'src/app/helpers/dictionaryHelper';

@Component({
  selector: 'app-admin-bar-graph',
  templateUrl: './admin-bar-graph.component.html',
  styleUrls: ['./admin-bar-graph.component.css']
})
export class AdminBarGraphComponent implements OnInit {

  constructor(private ordersService: OrderService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  colors = [{  backgroundColor: 'rgb(255,127,80)' }];
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartData = [];

  ngOnInit(): void {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var vendasMeses = new Dictionary<Number>();
    
    this.ordersService.getOrdersLength().subscribe( items => {
      items.forEach(element => {
        var dataVenda = new Date(element.date.toString());
        var monthName = monthNames[dataVenda.getMonth()];
        if(!vendasMeses.ContainsKey(monthName)){
          vendasMeses.Add(monthName,1)
        }else{
          var quantidadeAtual  = Number.parseInt(vendasMeses.Item(monthName).toString());
          quantidadeAtual++;
          vendasMeses.Add(monthName,quantidadeAtual);
        }
      });
      this.barChartLabels = vendasMeses.Keys();
      this.barChartData =  [{data: vendasMeses.Values(), label: 'Vendas'}];
    });
  }

}
