import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthLoginResponse, AuthRegisterResponse, SignInRequest, SignUpRequest } from '../../features/auth/seller/models/auth.models';
import { environment } from '../../../environments/environments';


@Injectable({
  providedIn: 'root',
})

export class Auth {

  private http = inject(HttpClient);

  private readonly baseUrl = `${environment.apiUrl}`;

  
  // Sign-In
  signIn(data: SignInRequest) : Observable<AuthLoginResponse>{
    return this.http.post<AuthLoginResponse>(
      `${this.baseUrl}/seller/login`,
      data
    );
  }


  // sign-Up
  signUp(data: SignUpRequest) : Observable<AuthRegisterResponse>{
    return this.http.post<AuthRegisterResponse>(
      `${this.baseUrl}/seller/register`,
      data
    );
  }


}


