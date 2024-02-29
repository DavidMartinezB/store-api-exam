import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';

const routes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterLink
  ],
  exports: [RouterModule]
})
export class AppStoreRoutingModule { }
