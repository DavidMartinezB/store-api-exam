import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ItemsContainerComponent } from './components/items-container/items-container.component';
import { PagesComponent } from './pages/pages.component';
import { ItemsFilteredComponent } from './components/items-filtered/items-filtered.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    ItemsContainerComponent,
    PagesComponent,
    ItemsFilteredComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule

  ],
  exports: [
    PagesComponent
  ]
})
export class StoreModule { }
