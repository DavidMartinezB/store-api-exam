import { Component, Input, OnChanges } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { StoreDataInterface } from '../../interfaces/store-data.interface';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ItemsContainerComponent implements  OnChanges {

  @Input() storeData: StoreDataInterface[] | undefined;

  storeDataCopy: StoreDataInterface[] | undefined;

  @Input() categorySelected: any;

  constructor ( private route: ActivatedRoute ) {
    this.route.params.subscribe( params => {
      this.categorySelected= params['category']
      this.getFilteredData()
    })
  }

  ngOnChanges(): void {
    this.getFilteredData()

  }

  getFilteredData() {
    this.storeDataCopy = this.storeData;
    if (this.categorySelected) {
      this.storeDataCopy = this.storeDataCopy?.filter( (item) =>
        item.category === this.categorySelected);
    }
  }


}
