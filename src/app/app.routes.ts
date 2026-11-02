import { Routes } from '@angular/router';
import { AuthSellerPage } from './features/auth/seller/pages/auth-page/auth-page';
import { AuthBuyerPage } from './features/auth/buyer/pages/auth-buyer-page/auth-buyer-page';
import { authGuard } from './core/guards/auth/auth-guard';
import { MainLayout } from './layout/main-layout/main-layout';
import { ProductPage } from './features/product_page/products/product-page/product-page';
import { ProductLayoutPage } from './features/product_page/product_layout/product-layout-page/product-layout-page';


export const routes: Routes = [
  { path: 'auth/seller', component: AuthSellerPage},
  { path: 'auth/buyer', component: AuthBuyerPage },
  { path: '', 
    component: MainLayout,
    children:[
      {
        path: '',
        component: ProductLayoutPage
      }
    ]
   },
];


 