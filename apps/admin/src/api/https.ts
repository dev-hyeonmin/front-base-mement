import axios from 'axios';
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

export const handleError = (error: any) => { //AxiosError
  console.error('Mutation error:', error);

  const statusCode = error.response?.status;
  if (statusCode == 401) {
    // alert('⚠️ 로그인 시간이 만료 되어 로그인 페이지로 이동합니다.');
    removeToken();
    window.location.reload();
  } else {
    alert(`⚠️ 오류 :: 개발자에게 문의 바랍니다. \r\n ${error.response.data.message.error}`);
  }
};