import { Component, OnInit } from '@angular/core';
import { StoreApiCallServiceService } from '../services/store-api-call.service.service';
import { StoreDataInterface } from '../interfaces/store-data.interface';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit{

  storeData: StoreDataInterface[] | undefined;

  categorySelected: any;

  constructor( private storeService: StoreApiCallServiceService ) { }

  ngOnInit(): void {
    this.storeService.getStoreData().subscribe( (data ) => {
      this.storeData = data;
    });
  }

  getCategorySelected(category: any) {
    this.categorySelected = category;
    console.log(this.categorySelected);
  }

}
