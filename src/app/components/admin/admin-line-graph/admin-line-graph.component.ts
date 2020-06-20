import { Component, OnInit } from '@angular/core';
import { Dictionary } from 'src/app/helpers/dictionaryHelper';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-admin-line-graph',
  templateUrl: './admin-line-graph.component.html',
  styleUrls: ['./admin-line-graph.component.css']
})
export class AdminLineGraphComponent implements OnInit {

  constructor(private ordersService: OrderService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  colors = [{  backgroundColor: 'rgb(255,127,80)' }];
  public barChartLabels = [];
  public barChartType = 'line';
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
          vendasMeses.Add(monthName,Number.parseInt(element.total.toString()))
        }else{
          var totalAtual  = Number.parseInt(vendasMeses.Item(monthName).toString());
          totalAtual = totalAtual + Number.parseInt(element.total.toString());
          vendasMeses.Add(monthName,totalAtual);
        }
      });
      console.log(vendasMeses.Keys());
      this.barChartLabels = vendasMeses.Keys();
      this.barChartData =  [{data: vendasMeses.Values(), label: 'Vendas'}];
    });
  }

}
