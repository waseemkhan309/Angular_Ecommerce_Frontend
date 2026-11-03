import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CategoryResponse } from '../../../features/product_page/product-filters/model/category.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root',
})



export class CategoryService {
    private http = inject(HttpClient);
    
    private readonly baseUrl = `${environment.apiUrl}`;

    // Get Method - Get All Categories
    GetCategories(): Observable<CategoryResponse> {
      return this.http.get<CategoryResponse>(`${this.baseUrl}/category`);
    }

}
