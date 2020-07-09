import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productModel } from './productModel';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost/api';
  constructor(private http: HttpClient) {}

  httpOption = {
    header: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  getProduct(): Observable<productModel> {
    return this.http.get<productModel>(this.apiUrl + '/product.php');
  }
}
