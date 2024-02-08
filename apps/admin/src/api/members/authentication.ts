import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import $https, { handleError } from "../https";
import { IMembersLoginRequestDto, IMembersLoginResponseDto } from "./types";

/**
 * 로그인 요청
 * @param {IMembersLoginRequestDto} data
 * @returns {IMembersLoginResponseDto}
 */
const usePostLogin = (opts = {}) => {
  const uri = `members/login`;

  const fn = (data: IMembersLoginRequestDto): Promise<AxiosResponse<IMembersLoginResponseDto>> =>
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

// /**
//  * 최초 로그인 요청
//  * @param {IMembersLoginRequestDto} data
//  */
// const usePostFirstLogin = () => {
//   const uri = `${uriKey.join('/')}/authentication/firstlogin`;

//   const fn = (data: IMembersLoginRequestDto): Promise<boolean> => $https.post(uri, data);

//   return useMutation({
//     mutationFn: fn,
//   });
// };

// /**
//  * 로그아웃
//  * @param {IMembersLoginRequestDto} data
//  * @returns {IAuthenticationOut}
//  */
// const useDeleteAuthenticationToken = (opts = {}) => {
//   const uri = `${uriKey.join('/')}/authentication/token`;

//   const fn = (): Promise<IExpireSessionResponseDto> => $https.delete(uri);

//   return useMutation({
//     mutationFn: fn,
//     ...opts,
//   });

//   // return useMutation(() => $https.post(uri, data), opts);
// };

// /**
//  * Access Token 재발행
//  * @param {IMembersLoginRequestDto} data
//  * @returns {IAuthenticationOut}
//  */
// const usePostAuthenticationRefreshToken = async (refreshToken: string) => {
//   const uri = `${uriKey.join('/')}/authentication/refresh-tokens`;
//   return $https.post(uri, { refreshToken });
// };

export { usePostLogin };
