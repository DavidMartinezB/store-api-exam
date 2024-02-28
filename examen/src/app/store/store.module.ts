import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ItemsContainerComponent } from './components/items-container/items-container.component';
import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ItemsContainerComponent,
    PagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagesComponent
  ]
})
export class StoreModule { }
