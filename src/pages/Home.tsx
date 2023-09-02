
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/users";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../store/token";
import { setCookie } from "../libs/cookies";


export default function Home() {
  const dispatch = useDispatch();
  const mutation = useMutation(login, {
    onSuccess: (data, variables, context) => {
      const token = data.data.result.token;
      console.log(`Token:: ${token}`);
      //   setCookie('x-jwt', token, {
      //   	path: '/',
      //   	secure: '/',
      // });
      // dispatch(setToken([{token: data.data.result.token}]));
    }
  });

  useEffect(() => {
    // mutation.mutate({ email: 'user2@gmail.com', password: 'user2' });
  }, []);

  return (
    <>
      <h1>Home.</h1>
    </>
  );
}
