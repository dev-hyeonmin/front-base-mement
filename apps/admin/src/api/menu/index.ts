import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import $https, { handleError } from "../https";
import { IMenusResponseDto } from "./types";

/**
 * 메뉴 리스트 가져오기
 * @returns {IMenusResponseDto}
 */
const useGetMenus = (opts = {}) => {
  const uri = `menu`;

  const fn = (): Promise<AxiosResponse<IMenusResponseDto>> =>
  $https.get(uri);

  return useQuery([uri, ...Object.values(opts)], () => fn(), {
    onError: handleError, 
    ...opts});
};

export { useGetMenus };
