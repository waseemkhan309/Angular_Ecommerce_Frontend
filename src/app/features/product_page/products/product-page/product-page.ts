import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../../../../core/services/product/product-service';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage implements OnInit {
  private productService = inject(ProductService);

  // Signals for state management
  products = signal<Product[]>([]);
  isLoading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);

  // Cursor pagination state tracking
  hasMore = true;
  private nextCreatedAt: string | null = null;
  private nextId: string | null = null;

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    if (!this.hasMore || this.isLoading()) return;

    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.productService.productList({
      pageSize: 1,
      lastCreatedAt: this.nextCreatedAt,
      lastId: this.nextId,
    }).subscribe({
      next: (response) => {
        const pagedResult = response.data;

        // Append new products to existing list
        this.products.update(prev => [...prev, ...pagedResult.items]);
        
        // Update pagination tracking tokens
        this.hasMore = pagedResult.hasMore;
        this.nextCreatedAt = pagedResult.nextCreatedAt ?? null;
        this.nextId = pagedResult.nextId ?? null;
        
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Failed to load products', error);
        this.errorMessage.set('Failed to load products. Please try again later.');
        this.isLoading.set(false);
      }
    });
  }
}