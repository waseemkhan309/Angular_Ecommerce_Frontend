import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { Observable } from 'rxjs';
import { ProductListResponse } from '../../../features/products/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private http = inject(HttpClient);
  private readonly baseURL = `${environment.apiUrl}`;


  // Get API - Fetch list of products
  productList() : Observable<ProductListResponse>{
    return this.http.get<ProductListResponse>(`${this.baseURL}/product`);
  }


}
