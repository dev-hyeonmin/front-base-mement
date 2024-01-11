import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import $https from "../https";
import { IBranchesOutDto } from "./types";

/**
 * 지점 리스트 가져오기
 * @returns {IAuthenticationOut}
 */
const useGetBranches = (opts = {}) => {
  const uri = `branches`;

  const fn = (): Promise<AxiosResponse<IBranchesOutDto>> =>
  $https.get(uri);

  return useQuery([uri, ...Object.values(opts)], () => fn(), opts);
};

export { useGetBranches };
