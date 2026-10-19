import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { Observable } from 'rxjs';
import { BuyerAuthLoginResponse, BuyerSignInRequest, BuyerSignUpRequest } from '../../../features/auth/buyer/models/buyer-auth.module';

@Injectable({
  providedIn: 'root',
})

export class BuyerAuth {
  
  private http = inject(HttpClient);

  private readonly baseUrl = `${environment.apiUrl}`;

  // Buyer SignIn
  buyerSignIn(data: BuyerSignInRequest ) : Observable<BuyerAuthLoginResponse>{
    return this.http.post<BuyerAuthLoginResponse>(
      `${this.baseUrl}/buyer/login`,
      data
    );
  }


  // Buyer signUp
  buyerSignUp( data: BuyerSignUpRequest ) : Observable<BuyerAuthLoginResponse>{
    return this.http.post<BuyerAuthLoginResponse>(
      `${this.baseUrl}/buyer/register`,
      data
    );
  }

}

