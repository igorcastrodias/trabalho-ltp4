import { Component, OnInit } from '@angular/core';
import { LocalStorageHelper } from 'src/app/helpers/localStorageHelper';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    LocalStorageHelper.removeLocalStorage("itemsOfCart");
  }

}
