import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../../core/services/product/product-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})

export class ProductPage {

  private productService = inject(ProductService);

  // signals for state management
  products = signal<Product[]>([]);
  isLoading = signal<boolean>(true);
  errorMessage = signal<string | null>(null);

  

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts():void{
    this.isLoading.set(false);
    this.errorMessage.set(null);

    this.productService.productList().subscribe({
      next: (response) =>{
        this.products.set(response.data || []);
        console.log(this.products());
        this.isLoading.set(false);
      },
      error: (error)=>{
        console.log('Failed to load products', error);
        this.errorMessage.set('Failed to load products. Please try again later.');
        this.isLoading.set(false);
      }
    })

  }

}
