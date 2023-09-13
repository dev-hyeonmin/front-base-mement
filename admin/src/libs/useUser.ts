import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/users";
import { TResponse } from "../types/types";
import { TUser } from "../types/users";

export default function useUser() {
  const { isLoading, data, isError } = useQuery<TResponse<TUser>>(["me"], getMe, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    userLoading: isLoading,
    user: data?.result,
    isLoggedIn: data != undefined,
  };
}