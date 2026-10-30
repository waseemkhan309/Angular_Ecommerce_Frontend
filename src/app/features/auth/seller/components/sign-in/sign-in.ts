import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Auth } from '../../../../../core/services/auth';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})


export class SignIn {

  private fb = inject(FormBuilder);
  private authServices = inject(Auth);
  private router = inject(Router);
  private toastr = inject(ToastrService);


  errorMessage = '';
  successMessage = '';
  isLoading = false;

  signInForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });



  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if(this.signInForm.invalid){
      this.signInForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    this.authServices
    .signIn(this.signInForm.getRawValue())
    .pipe(finalize(() => {
        this.isLoading = false;
    }))
    .subscribe({
      next:(response)=>{
        this.successMessage = 'Sign in successful!';
        console.log('Authenticated user:', response );
        this.toastr.success("Success");
        // redirect
        this.router.navigate(['/product']);
      },
      error:(error)=>{
        // this.toastr.error("Error");
         this.errorMessage =
            error.status === 401
              ? 'Invalid email or password.'
              : 'Unable to sign in. Please try again.';
      }
    });
    
  }
}
