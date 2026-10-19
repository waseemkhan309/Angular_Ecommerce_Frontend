import { Routes } from '@angular/router';
import { AuthPage } from './features/auth/seller/pages/auth-page/auth-page';
import { BuyerAuth } from './core/services/buyer/buyer-auth';
import { AuthBuyerPage } from './features/auth/buyer/pages/auth-buyer-page/auth-buyer-page';

export const routes: Routes = [
  { path: 'auth/seller', component: AuthPage },
  { path: 'auth/buyer', component:AuthBuyerPage  }
];


