import { AxiosResponse } from "axios";
import { useMutation, useQuery } from "react-query";
import $https, { handleError } from "../https";
import { ICommonResponseDto } from "../types";
import { ICreateMembersRequestDto, IMembersRequestDto, IMembersResponseDto } from "./types";

/**
 * 사용자 리스트 조회
 * @param {IMembersRequestDto} data
 * @returns {IMembersLoginResponseDto}
 */
const useGetMembers = (params = {}, opts = {}) => {
  const uri = `members`;
  const fn = (): Promise<AxiosResponse<IMembersResponseDto>> =>
    $https.get(uri, { params });

  return useQuery([uri, ...Object.values(opts)], () => fn(), {
    onError: handleError,
    ...opts
  });
};

/**
 * 회원가입
 * @param {ICreateMembersRequestDto} data
 * @returns {IMembersLoginResponseDto}
 */
const usePostMembers = (opts = {}) => {
  const uri = `members`;

  const fn = (data: ICreateMembersRequestDto): Promise<AxiosResponse<ICommonResponseDto>> =>
    $https.post(uri, data, {
      headers: {
        //
      },
    });

  return useMutation({
    mutationFn: fn,
    onError: handleError,
    ...opts,
  });
};

export { useGetMembers, usePostMembers };
