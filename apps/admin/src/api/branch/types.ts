export interface IBranchesResponseDto {
  id: number;
  name: string;
  title: string
  url: string;
  seq: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface IBranchesOutDto {
  branches: IBranch[];
}

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
   * 지점 영문명
   * URL 동일하게 사용
   */
  nameEng: string;

  /**
   * 지점 원장
   */
  director: string;

  /**
   * 지점 연락처
   */
  callNumber: string;

  /**
   * 사업자 번호
   */
  businessNumber: string;

  /**
   * 주소
   */
  address: string;

  /**
   * 수정일
   */
  updateAt: string;

  /**
   * 등록일
   */
  registAt: string;
}