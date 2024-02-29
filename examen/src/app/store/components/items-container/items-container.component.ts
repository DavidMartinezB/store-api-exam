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
  constructor ( private route: ActivatedRoute ) { }

  ngOnChanges(): void {
    this.storeDataCopy = this.storeData;

    if (this.categorySelected !== undefined) {
      this.storeDataCopy = this.storeDataCopy?.filter( (item) =>
        item.category === this.categorySelected);
    }
  }



}
