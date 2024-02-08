import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import $https, { handleError } from "../https";
import { IBranchesResponseDto } from "./types";

/**
 * 지점 리스트 가져오기
 * @returns {IAuthenticationOut}
 */
const useGetBranches = (opts = {}) => {
  const uri = `branch`;

  const fn = (): Promise<AxiosResponse<IBranchesResponseDto>> =>
  $https.get(uri);

  return useQuery([uri, ...Object.values(opts)], () => fn(), {
    onError: handleError, 
    ...opts});
};

export { useGetBranches };
