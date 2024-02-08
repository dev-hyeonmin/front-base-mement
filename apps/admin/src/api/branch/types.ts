import { ICommonResponseDto } from "../types";

export interface IBranchesResponseDto extends ICommonResponseDto<IBranch[]> {}

export interface IBranch {
  /**
   * 지점 아이디
   */
  id: number;

  /**
   * 지점명
   */
  name: string;

  /**
   * 지점 표시명
   */
  title: string;

  /**
   * 주소
   */
  url: string;

  /**
   * 표시 순서
   */
  seq: number;

  /**
   * 홈페이지 오픈 여부
   */
  isShow: boolean;
}