import { Text } from "@angular/compiler";

// interface
export interface BuyerSignInRequest{
  email: string;
  password: string;
}


export interface BuyerSignUpRequest {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  gender: string;

  // Address details
  street: string;
  city: string;
  state: string;
  postalCode: string;
  area: string;
  country: string;

}


export interface BuyerAuthLoginResponse{
  token: string,
  email: string,
  username: string,
  firstName: string,
  lastName: string
}

export interface BuyerAuthRegisterResponse{
    Id : string
}