import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreCategoryApiCallService {

  constructor( private HttpClient: HttpClient ) { }

  getStoreData(): Observable<any> {
    return this.HttpClient.get('https://fakestoreapi.com/products/categories');
  }
}
