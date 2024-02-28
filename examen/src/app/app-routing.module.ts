import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JewelryComponent } from './jewelry/jewelry-component/jewelry-component.component';

const routes: Routes = [
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then(m => m.StoreModule)
  },
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
