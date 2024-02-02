import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import $https from "../https";
import { IMembersRequestDto, IMembersResponseDto } from "./types";

/**
 * 사용자 리스트 조회
 * @param {IMembersRequestDto} data
 * @returns {IMembersLoginResponseDto}
 */
const useGetMembers = (perPage = 10, opts = {}) => {
  const uri = `members/list/2`;
  const params = { perPage };

  const fn = (): Promise<AxiosResponse<IMembersResponseDto>> =>
  $https.get(uri, { params });

  return useQuery([uri, ...Object.values(opts)], () => fn(), opts);
};

export { useGetMembers };
