import { Component } from '@angular/core';
import { ProductFilters } from '../product-filters/product-filters';
import { ProductPage } from '../../products/product-page/product-page';

@Component({
  selector: 'app-product-layout-page',
  imports: [ProductFilters, ProductPage],
  templateUrl: './product-layout-page.html',
  styleUrl: './product-layout-page.css',
})
export class ProductLayoutPage {}
