import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000'
});

export const getMe = () =>
  instance.get(`users`, {
    headers: {
      "x-jwt": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjkzMzc4NjkyLCJleHAiOjE2OTM0MjE4OTJ9.XhLXXcwcddVDVE8HNG4QqQCs4KW6Wlm8yg5e0AoHnHA'
    }
  }).then((response) => response.data);

export const login = ({
  email,
  password,
}: any) =>
  instance.post(
    `users/login`,
    { email, password },
  );