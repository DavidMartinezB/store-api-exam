import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JewelryComponent } from './jewelry-component/jewelry-component.component';



@NgModule({
  declarations: [
    JewelryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JewelryComponent
  ]
})
export class JewelryModule { }
