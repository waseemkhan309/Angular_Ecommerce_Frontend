import { Component, inject } from '@angular/core';
import { ProductFilters } from '../../product-filters/product-filters';
import { ProductPage } from '../../products/product-page/product-page';
import { Product } from '../../products/models/product.model';
import { signal } from '@angular/core';
import { ProductService } from '../../../../core/services/product/product-service';
import { ProductFilterCriteria } from '../../product-filters/model/category.model';


@Component({
  selector: 'app-product-layout-page',
  imports: [ProductFilters, ProductPage],
  templateUrl: './product-layout-page.html',
  styleUrl: './product-layout-page.css',
})


export class ProductLayoutPage {
  private productService = inject(ProductService);

  // Signals for state management
  products = signal<Product[]>([]);
  isLoading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);

  // Cursor pagination state tracking
  hasMore = true;
  nextCreatedAt: string | null = null;
  nextId: string | null = null;


  // Store active filters state here
  currentFilters = signal<ProductFilterCriteria>({
    categoryIds: [],
    minPrice: '',
    maxPrice: '',
    rating: null
  });

  

  ngOnInit(): void {
    this.fetchProducts();
  }

  // Called when user changes any filter from the child component
  onFilterChange(filters: ProductFilterCriteria): void {
    console.log("----",filters);
    this.currentFilters.set(filters);
    
    // 1. Reset pagination tracking for the new filter set
    this.hasMore = true;
    this.nextCreatedAt = null;
    this.nextId = null;
    
    // 2. Clear old products to display fresh results
    this.products.set([]);
    
    // 3. Fetch fresh results with new filters
    this.fetchProducts();
  }

  fetchProducts(): void {
    if (!this.hasMore || this.isLoading()) return;

    this.isLoading.set(true);
    this.errorMessage.set(null);

    const filters = this.currentFilters();

    // 1. Build the base payload with required parameters
  const requestPayload: any = {
    pageSize: 10,
  };

  // 2. Conditionally append pagination tokens only if they exist
  if (this.nextCreatedAt) {
    requestPayload.lastCreatedAt = this.nextCreatedAt;
  }
  if (this.nextId) {
    requestPayload.lastId = this.nextId;
  }

  // 3. Conditionally append filter fields only if they have values
  if (filters.categoryIds && filters.categoryIds.length > 0) {
    requestPayload.categoryIds = filters.categoryIds;
  }

  if (filters.minPrice !== '' && filters.minPrice != null) {
    requestPayload.minPrice = Number(filters.minPrice);
  }

  if (filters.maxPrice !== '' && filters.maxPrice != null) {
    requestPayload.maxPrice = Number(filters.maxPrice);
  }

  if (filters.rating !== null && filters.rating !== '') {
    requestPayload.rating = Number(filters.rating); // Change to string if your API expects string
  }

    this.productService.productList(
      requestPayload      
    ).subscribe({
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


