import axios from "axios";

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: "KakaoAK " + process.env.REACT_APP_API_KEY,
  },
});

const getRequestDataHandler = (input, article) => {
  article = article ? article : "web";
  return Kakao.get(`/v2/search/${article}`, {
    params: {
      query: input,
      sort: "accuracy",
      size: 3,
    },
  });
};

export default getRequestDataHandler;
