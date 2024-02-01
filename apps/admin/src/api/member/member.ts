import { IMembersRequestDto } from "./types";

/**
 * 사용자 리스트 조회
 * @param {IMembersRequestDto} data
 * @returns {IMembersLoginResponseDto}
 */
const useGetMembers = (opts = {}) => {
  const uri = `members/list/1`;

  // const fn = (data: IMembersRequestDto): Promise<AxiosResponse<IMembersResponseDto>> =>
  //   $https.get(uri);

  // return useQuery([fn,]);
};