import { Component, OnInit } from '@angular/core';
import { LocalStorageHelper } from 'src/app/helpers/localStorageHelper';
import { Login } from 'src/app/services/authentication/login.model';

@Component({
  selector: 'app-admin-sidebar-left',
  templateUrl: './admin-sidebar-left.component.html',
  styleUrls: ['./admin-sidebar-left.component.css']
})
export class AdminSidebarLeftComponent implements OnInit {
  currentUser : Login;
  constructor() { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(LocalStorageHelper.getLocalStorage("user"))
  }

}
