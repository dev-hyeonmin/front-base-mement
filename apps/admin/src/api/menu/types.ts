import { ICommonResponseDto } from "../types";

export interface IMenusResponseDto extends ICommonResponseDto<IMenu[]> {}

export interface IMenu {
  /**
   * 메뉴 아이디
   */
  id: number;

  /**
   * 메뉴명
   */
  title: string;

  /**
   * 연결링크
   */
  link: string;

  /**
   * 표시 순서
   */
  seq: number;
}