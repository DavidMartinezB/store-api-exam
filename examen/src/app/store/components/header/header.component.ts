import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StoreCategoryApiCallService } from '../../services/store-category-api-call.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements  OnInit{

  @Output() categorySelected: EventEmitter<any> = new EventEmitter<any>();

  storeData: any;
  constructor ( private storeService: StoreCategoryApiCallService ) { }

  ngOnInit(): void {
    this.storeService.getStoreData().subscribe( (data) => {
      this.storeData = data;
    });
  }

  emitCategory(category: any) {
    this.categorySelected.emit(category);
  }
}
