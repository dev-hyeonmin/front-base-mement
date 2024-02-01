import { ICommonResponseDto } from "../types";

/**
 * Members
 */
export interface IMembersLoginRequestDto {
  loginId: string;
  password: string;
}

interface IMembersLoginResponse {
  accessToken: string;
}

export interface IMembersLoginResponseDto extends ICommonResponseDto<IMembersLoginResponse> { }