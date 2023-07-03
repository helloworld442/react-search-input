import { useEffect, useState } from "react";
import SearchForm from "../components/Search/SearchForm";
import {
  getBlogDataHandler,
  getCafeDataHandler,
  getVideoDataHandler,
  getWebDataHandler,
} from "../api/api";
const SearchFormContainer = ({ article }) => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);

  const onChangeHandler = (e) => setTitle(e.target.value);
  const onSubmitHandler = (e) => e.preventDefault();

  const getApiDataHandler = async () => {
    switch (article) {
      case "web":
        return await getWebDataHandler(title);
      case "vclip":
        return await getVideoDataHandler(title);
      case "blog":
        return await getBlogDataHandler(title);
      case "cafe":
        return await getCafeDataHandler(title);
    }
  };

  useEffect(() => {
    const setApiDataHandler = async () => {
      try {
        const response = await getApiDataHandler();
        setData(response.data.documents);
      } catch (e) {
        const response = null;
        setData(response);
      }
    };
    setApiDataHandler();
  }, [title, article]);

  return (
    <SearchForm
      data={data}
      onChange={onChangeHandler}
      onSubmit={onSubmitHandler}
    />
  );
};

export default SearchFormContainer;

// getRequestDataHandler가 어떤 함수인지 명확하게 와닿지 않는다.
// catch일때 null 값이 무슨 의미인지 와닿지 안는다.
// useEffect를 사용한 이유가 크게 와닿지 않는다.
// 프레젠테이션 컨테이너 디자인 패턴을 사용한 근거가 없다.
