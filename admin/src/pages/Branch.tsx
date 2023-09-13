import { useQuery } from "@tanstack/react-query";
import { getBranchInfo } from "../api/branch";
import { TBranch } from "../types/branch";
import { TResponse } from "../types/types";

export default function Branch() {
    const branchPk = localStorage.getItem('branchId');
    const { isLoading, data } = useQuery<TResponse<TBranch>>([`branch`, branchPk], getBranchInfo);

    return (
      <div className="wrapper">
        <h1>지점 관리</h1>
      </div>
    );
  }
  