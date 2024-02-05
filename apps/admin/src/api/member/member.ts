import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import $https, { handleError } from "../https";
import { IMembersRequestDto, IMembersResponseDto } from "./types";

/**
 * 사용자 리스트 조회
 * @param {IMembersRequestDto} data
 * @returns {IMembersLoginResponseDto}
 */
const useGetMembers = (params = {}, opts = {}) => {
  const uri = `members/list/2`;
  const fn = (): Promise<AxiosResponse<IMembersResponseDto>> =>
  $https.get(uri, { params });

  return useQuery([uri, ...Object.values(opts)], () => fn(), {
    retry: false,
    onError: handleError, 
    ...opts});
};

export { useGetMembers };
