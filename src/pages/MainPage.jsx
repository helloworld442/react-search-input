import { styled } from "styled-components";
import SearchHeader from "../components/Search/SearchHeader";
import SearchFooter from "../components/Search/SearchFooter";
import SearchFormContainer from "../containers/SearchFormContaienr";
import { useState } from "react";

const MainPageBlock = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 30px;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const MainPage = () => {
  // 해더에서 selectBox 데이터 바뀔때마다 전체 화면 다시 리렌더링
  const [article, setArticle] = useState("web");
  const onChangeHandler = (e) => setArticle(e.target.value);
  return (
    <MainPageBlock>
      <SearchHeader onChange={onChangeHandler} />
      <SearchFormContainer article={article} />
      <SearchFooter />
    </MainPageBlock>
  );
};
export default MainPage;
