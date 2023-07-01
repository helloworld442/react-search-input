import { useEffect, useState } from "react";
import SearchForm from "../components/search/SearchForm";
import getRequestDataHandler from "../api/api";
const SearchFormContainer = ({ article }) => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);

  const onChangeHandler = (e) => setTitle(e.target.value); // input 값 바뀔 때 마다 title state 업데이트
  const onSubmitHandler = (e) => e.preventDefault(); // 브라우저 렌더링 일어나지 않게 preventDefault 처리
  const filterHandler = (data) => {
    data = data.replace(/(<b>)|(<\/b>)/gi, ""); // b태그 필터링 처리
    data = data.replace(/&#34;/gi, ""); // 공백 필터링 처리
    return data;
  };

  //title과 article중 하나라도 바뀌면 데이터를 다시 받아오는 로직
  //비동기적으로 데이터 받아오기 (랜더링 속도 높이기 위해서)
  useEffect(() => {
    // input 값 api로 보내주고 해당 데이터 받아서 data에 저장
    getRequestDataHandler(title, article)
      .then((res) => setData(res.data.documents))
      .catch((e) => setData(null));
  }, [title, article]);

  return (
    <SearchForm
      title={title}
      data={data}
      onChange={onChangeHandler}
      onSubmit={onSubmitHandler}
      check={filterHandler}
    />
  );
};

export default SearchFormContainer;
