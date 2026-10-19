import { Component } from '@angular/core';
import { SignIn } from '../../components/sign-in/sign-in';
import { SignUp } from '../../components/sign-up/sign-up';

@Component({
  selector: 'app-auth-page',
  imports: [SignIn, SignUp],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css',
})

export class AuthPage {

  isSignIn = true;

  showSignIn() : void{
    this.isSignIn = true;
  }


  showSignUp() : void{
    this.isSignIn = false;
  }

}
