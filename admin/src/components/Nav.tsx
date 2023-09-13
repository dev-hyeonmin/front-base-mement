import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getBranchList } from "../api/branch";
import { TBranches } from "../types/branch";
import { TResponse } from "../types/types";

type TSitemap = {
  title: string;
  submenu: string[];
}

const sitemap: TSitemap[] = [
  {
    title: "지점 관리",
    submenu: [
      "지점 관리",
    ]
  },
  {
    title: "계정 관리",
    submenu: [
      "계정 관리",
    ]
  },
  {
    title: "사이트 관리",
    submenu: [
      "메인 페이지",
      "소개 페이지"
    ]
  },
  {
    title: "번역 관리",
    submenu: [
      "번역 관리"
    ]
  }
]

export default function Nav() {
  const currentBranchId = localStorage.getItem('branchId');
  const [branchId, setBranchId ] = useState(currentBranchId ? currentBranchId : 1)
  const { isLoading, data, isError } = useQuery<TResponse<TBranches>>(["branch"], getBranchList);
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectId = e.target.value;
    setBranchId(selectId);
    localStorage.setItem('branchId', selectId);
  }

  return (
    <nav>
      <select onChange={(e) => onSelect(e)} value={branchId}>
        {data?.result?.branches.map((branch) =>
          <option key={`branch${branch.id}`} value={branch.id}>{branch.name}</option>
        )}
      </select>

      {sitemap.map(menu =>
        <dl key={menu.title}>
          <dt>{menu.title}</dt>
          <dd>
            <ul>
              {menu.submenu.map(sub =>
                <li key={sub}>
                  <Link to='/'>
                    {sub}
                  </Link>
                </li>
              )}
            </ul>
          </dd>
        </dl>
      )}
    </nav>
  );
}
