import axios from 'axios';


const instance = axios.create({
  baseURL: process.env.NODE_ENV === "development"
    ? "https://dummyjson.com/"
    : "https://dev.museclinic.co.kr/",
  // withCredentials: true, // 쿠키를 통해 사용자 세션을 찾아 이를 재활용
  // params: {
  //   api_key: process.env.API_KEY,
  //   language: "ko-KR",
  // },
  // headers: {
  //   access_token: cookies.get('access_token'),
  // }
});

export default instance;