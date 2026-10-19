import { Component } from '@angular/core';
import { AppBuyerSignIn } from '../../components/app-buyer-sign-in/app-buyer-sign-in';
import { AppBuyerSignUp } from '../../components/app-buyer-sign-up/app-buyer-sign-up';

@Component({
  selector: 'app-auth-buyer-page',
  imports: [ AppBuyerSignIn, AppBuyerSignUp ],
  templateUrl: './auth-buyer-page.html',
  styleUrl: './auth-buyer-page.css',
})
export class AuthBuyerPage {
  isBuyerSignIn = true;

  showBuyerSignIn() : void{
    this.isBuyerSignIn = true;
  };

  showBuyerSignUp() : void{
    this.isBuyerSignIn = false;
  }
}
