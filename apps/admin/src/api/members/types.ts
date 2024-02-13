import { ICommonResponseDto } from "../types";

/**
 * Members
 */
export interface IMembersRequestDto {
  perPage: number;
}

export interface IMembers {
  id: number;
  loginId: string;
  username: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface IMembersResponseDto extends ICommonResponseDto<IMembers[]> { }

export interface ICreateMembersRequestDto {
  branchIds: number[];
  menuIds: number[];
  loginId: string;
  username: string;
  password: string;
  role: string;
}

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