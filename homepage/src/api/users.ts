import axios from "axios";
import { getCookie } from "../libs/cookies";

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    access_token: getCookie('x-jwt'),
  }
});

export const getMe = () =>
  instance.get(`users`).then((response) => response.data);

export const login = ({
  email,
  password,
}: any) =>
  instance.post(
    `users/login`,
    { email, password },
  );