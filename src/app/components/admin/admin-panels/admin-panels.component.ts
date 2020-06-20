import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panels',
  templateUrl: './admin-panels.component.html',
  styleUrls: ['./admin-panels.component.css']
})
export class AdminPanelsComponent implements OnInit {

  paineis = [
    {
      name:'Vendas de Hoje',
      count:120,
      icon: 'ion ion-bag',
      color:'small-box bg-info',
      link:'/categorias',
      linkName:'Relatórios'
    },
    {
      name:'Aumento Vendas',
      count:47+'%',
      icon: 'ion ion-stats-bars',
      color:'small-box bg-success',
      link:'/categorias',
      linkName:'Relatórios'
    },
    {
      name:'Total Clientes',
      count:39,
      icon: 'ion ion-person-add',
      color:'small-box bg-warning',
      link:'/categorias',
      linkName:'Lista Clientes'
    },
    {
      name:'Clientes Recorrentes',
      count:7,
      icon: 'ion ion-pie-graph',
      color:'small-box bg-danger',
      link:'/categorias',
      linkName:'Vendas'
    }];


  constructor() { }

  ngOnInit(): void {
  }

}
