import { Text } from "@angular/compiler";

// interface
export interface SignInRequest{
  email: string;
  password: string;
}


export interface SignUpRequest {
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


export interface AuthLoginResponse{
  token: string,
  email: string,
  username: string,
  firstName: string,
  lastName: string
}

export interface AuthRegisterResponse{
    Id : string
}