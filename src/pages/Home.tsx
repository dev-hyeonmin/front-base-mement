
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/users";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../store/token";


export default function Home() {
  const dispatch = useDispatch();
  const mutation = useMutation(login, {
    onSuccess: (data, variables, context) => {
      console.log(`Token: ${data.data.result.token}`);
      // dispatch(setToken([{token: data.data.result.token}]));
    }
  });

  useEffect(() => {
    mutation.mutate({ email: 'user2@gmail.com', password: 'user2' });
  }, [])
  return (
    <>
      <h1>Home.</h1>
    </>
  );
}
