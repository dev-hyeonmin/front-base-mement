import { ICommonResponseDto } from "../types";

/**
 * Members
 */
export interface IMembersRequestDto {
  perPage: number;
}

interface IMembersResponse {
  id: number;
  loginId: string;
  username: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface IMembersResponseDto extends ICommonResponseDto<IMembersResponse[]> { }

/**
 * Login
 */
export interface IMembersLoginRequestDto {
  loginId: string;
  password: string;
}

interface IMembersLoginResponse {
  accessToken: string;
}

export interface IMembersLoginResponseDto extends ICommonResponseDto<IMembersLoginResponse> { }