import { QueryFunctionContext } from "@tanstack/react-query";
import instance from "./axios";

export const getBranchList = () =>
  instance.get(`branch`).then((response) => response.data);

export const getBranchInfo = ({ queryKey }: QueryFunctionContext) => {
  const [_, branchPk] = queryKey;
  return instance.get(`branch/${branchPk}`).then((response) => response.data);
};