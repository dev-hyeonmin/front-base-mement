import axios from "axios";
import { getCookie } from "../libs/cookies";
import instance from "./axios";

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