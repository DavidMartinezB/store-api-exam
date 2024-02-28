import { AfterContentChecked, Component, Input, OnChanges } from '@angular/core';

import { StoreDataInterface } from '../../interfaces/store-data.interface';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ItemsContainerComponent implements  OnChanges {

  @Input() storeData: StoreDataInterface[] | undefined;


  @Input() categorySelected: any;
  constructor ( ) { }

  ngOnChanges(): void {
    
    if (this.categorySelected !== undefined) {
      this.storeData = this.storeData?.filter( (item) =>
        item.category === this.categorySelected);
    }
  }



}
