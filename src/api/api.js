import axios from "axios";

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: "KakaoAK " + process.env.REACT_APP_API_KEY,
  },
});

export const getWebDataHandler = (input) =>
  Kakao.get(`/v2/search/web`, {
    params: {
      query: input,
      sort: "accuracy",
      size: 3,
    },
  });
export const getVideoDataHandler = (input) =>
  Kakao.get(`/v2/search/vclip`, {
    params: {
      query: input,
      sort: "accuracy",
      size: 3,
    },
  });

export const getBlogDataHandler = (input) =>
  Kakao.get(`/v2/search/blog`, {
    params: {
      query: input,
      sort: "accuracy",
      size: 3,
    },
  });

export const getCafeDataHandler = (input) =>
  Kakao.get(`/v2/search/cafe`, {
    params: {
      query: input,
      sort: "accuracy",
      size: 3,
    },
  });
