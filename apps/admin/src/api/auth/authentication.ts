import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import $https from "../https";
import { IAuthenticationOut, IAuthenticationRequestDto } from "./types";

/**
 * 로그인 요청
 * @param {IAuthenticationRequestDto} data
 * @returns {IAuthenticationOut}
 */
const usePostLogin = (opts = {}) => {
  const uri = `users/login`;

  const fn = (data: IAuthenticationRequestDto): Promise<AxiosResponse<IAuthenticationOut>> =>
    $https.post(uri, data, {
      headers: {
        //
      },
    });

  return useMutation({
    mutationFn: fn,
    ...opts,
  });
};

// /**
//  * 최초 로그인 요청
//  * @param {IAuthenticationRequestDto} data
//  */
// const usePostFirstLogin = () => {
//   const uri = `${uriKey.join('/')}/authentication/firstlogin`;

//   const fn = (data: IAuthenticationRequestDto): Promise<boolean> => $https.post(uri, data);

//   return useMutation({
//     mutationFn: fn,
//   });
// };

// /**
//  * 로그아웃
//  * @param {IAuthenticationRequestDto} data
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
//  * @param {IAuthenticationRequestDto} data
//  * @returns {IAuthenticationOut}
//  */
// const usePostAuthenticationRefreshToken = async (refreshToken: string) => {
//   const uri = `${uriKey.join('/')}/authentication/refresh-tokens`;
//   return $https.post(uri, { refreshToken });
// };

export { usePostLogin };
