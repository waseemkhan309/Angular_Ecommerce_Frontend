import { CanActivateFn, RedirectCommand } from '@angular/router';
import { BuyerAuth } from '../services/buyer/buyer-auth';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const buyerAuthService = inject(BuyerAuth);
  const router = inject(Router);

  if(buyerAuthService.isLoggedIn()){
    return true;  
  }

  let logedInUserRole : String = buyerAuthService.LogedInUserRole();

  if(logedInUserRole == 'Seller'){
    return new RedirectCommand(router.parseUrl('/auth/seller'));
  }else{
    return new RedirectCommand(router.parseUrl('/auth/buyer'));
  }
};
