import axios from "axios";

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: "KakaoAK " + process.env.REACT_APP_API_KEY,
  },
});

const getRequestMethodHandler = Kakao.get("/v2/search/web", {
  params: {
    query: "이효리",
  },
});

export default getRequestMethodHandler;
