import { TLogin } from "../types/users";
import instance from "./axios";

export const login = ({
  email,
  password
}: TLogin) =>
  instance
    .post(
      `users/login`,
      { email, password }
    )
    .then((response) => response.data);


export const getMe = () =>
  instance.get(`users`).then((response) => response.data);