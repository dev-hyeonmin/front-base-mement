import axios, { AxiosError } from 'axios';
import { getToken, removeToken } from '../util';

// 만료된 토큰 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiLtmY3quLjrj5kiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDcyNzA0NzAsImV4cCI6MTcwNzI3MDc3MH0.1DfMbKhRcN_lpja1RsDqPDT2xfI29zmGhkeEj6KZKxo
const token = getToken();
const $https = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'https://api.museclinic.co.kr/'
      : 'https://api.museclinic.co.kr/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token?.accessToken}`,
  },
  // withCredentials: true
});

export default $https;

export const handleError = (error: AxiosError) => {
  console.error('Mutation error:', error);

  const statusCode = error.response?.status;
  if (statusCode == 401) {
    removeToken();
    window.location.reload();
  }
};