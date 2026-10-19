import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Auth } from '../../../../../core/services/auth';
import { finalize } from 'rxjs';


@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})



export class SignUp {

  private fb = inject(FormBuilder);
  private authService = inject(Auth);

  errorMessage = '';
  successMessage = '';
  isLoading = false;

  signUpForm = this.fb.nonNullable.group({
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

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    this.authService
    .signUp(this.signUpForm.getRawValue())
    .pipe(
        finalize(()=>{
          this.isLoading = false;
        }
    ))
    .subscribe({
        next: (response) => {
          this.successMessage = 'Account created successfully!';
          console.log(response);
          this.signUpForm.reset();
        },
        error: (error) => {
           this.errorMessage =
            error.status === 409
              ? 'An account with this email may already exist.'
              : 'Unable to create your account. Please try again.';
        }
      });
  }


}