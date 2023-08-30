import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/users";
import { TUser } from "../types/users";

export default function useUser() {
  const { isLoading, data, isError } = useQuery<TUser>(["me"], getMe, {
    retry: false,
    refetchOnWindowFocus: false,
  });
  return {
    userLoading: isLoading,
    user: data,
    isLoggedIn: !isError,
  };
}