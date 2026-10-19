import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../../../../core/services/auth';
import { finalize } from 'rxjs';
import { AppBuyerSignIn } from '../app-buyer-sign-in/app-buyer-sign-in';
import { BuyerAuth } from '../../../../../core/services/buyer/buyer-auth';

@Component({
  selector: 'app-buyer-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './app-buyer-sign-up.html',
  styleUrl: './app-buyer-sign-up.css',
})

export class AppBuyerSignUp {
  private fb = inject(FormBuilder);
  private authBuyerService = inject(BuyerAuth);

  errorMessage = '';
  successMessage = '';
  isLoading = false;


  BuyerSignUpForm = this.fb.nonNullable.group({
        // Seller details
        userName: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        gender: ['', Validators.required],

        // Address details
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        postalCode: ['', Validators.required],
        area: ['', Validators.required],
        country: ['', Validators.required],
  });


  onSubmit() : void{
    this.errorMessage = '';
    this.successMessage = '';

    if(this.BuyerSignUpForm.invalid){
      this.BuyerSignUpForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    this.authBuyerService
    .buyerSignUp(this.BuyerSignUpForm.getRawValue())
    .pipe(finalize(()=>{
        this.isLoading = false;
    }))
    .subscribe({
        next:(response) => {
          this.successMessage = 'Sign in successfully';
          console.log('Authenticated user', response);
        },
        error:(error) => {
            this.errorMessage = 
              error.status === 401 
                ? 'Invalid email or password'
                : 'Unable to sign in. Please try again';
        }
      });   
  }
}
