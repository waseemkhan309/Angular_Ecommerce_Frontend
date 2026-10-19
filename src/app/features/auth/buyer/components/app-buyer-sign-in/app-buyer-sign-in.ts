import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../../../../core/services/auth';
import { email } from '@angular/forms/signals';
import { BuyerAuth } from '../../../../../core/services/buyer/buyer-auth';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-buyer-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './app-buyer-sign-in.html',
  styleUrl: './app-buyer-sign-in.css',
})

export class AppBuyerSignIn {
  private fb = inject(FormBuilder);
  private authServices = inject(BuyerAuth);


  errorMessage =  '';
  successMessage = '';
  isLoading = false;

  BuyerSignInForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  onSubmit() : void {
      this.errorMessage = '';
      this.successMessage = '';

      if(this.BuyerSignInForm.invalid){
        this.BuyerSignInForm.markAllAsTouched();
        return;
      }


      this.isLoading = false;

      this.authServices
      .buyerSignIn(this.BuyerSignInForm.getRawValue())
      .pipe(finalize(()=>{
        this.isLoading = false;
      }))
      .subscribe({
        next:()=>{
        console.log('Hello');
        },
        error:(error)=>{
          this.errorMessage = 
           error.status === 401
           ?  'Invalid email or password.'
              : 'Unable to sign in. Please try again.';
        }
      })

  }
}
