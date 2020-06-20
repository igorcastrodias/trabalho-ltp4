import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { Dictionary } from 'src/app/helpers/dictionaryHelper';

@Component({
  selector: 'app-admin-pie-graph',
  templateUrl: './admin-pie-graph.component.html',
  styleUrls: ['./admin-pie-graph.component.css']
})
export class AdminPieGraphComponent implements OnInit {

  constructor(private ordersService: OrderService) { }

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  ngOnInit(): void {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var vendasMeses = new Dictionary<number>();
    
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
      console.log(vendasMeses.Keys());
      this.doughnutChartLabels = vendasMeses.Keys();
      this.doughnutChartData =  vendasMeses.Values();
    });
  }

}
