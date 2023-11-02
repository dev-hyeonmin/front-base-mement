export interface IAuthenticationRequestDto {
  email: string;
  password: string;
}

export interface IAuthenticationOut {
  result: {
    token: string;
  }
}