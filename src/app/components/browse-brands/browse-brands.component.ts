import { Component, OnInit } from '@angular/core';
import { Brand } from '../../services/brand/brand.model';
import { BrandService } from '../../services/brand/brand.service';

@Component({
  selector: 'app-browse-brands',
  templateUrl: './browse-brands.component.html',
  styleUrls: ['./browse-brands.component.css']
})
export class BrowseBrandsComponent implements OnInit {

  constructor(public brandService : BrandService) { }

  ngOnInit(): void {
    this.brandService.getListBrands();
  }

}
