import axios from 'axios';
import { getToken } from '../util';

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
});


export default $https;