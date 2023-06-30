import { styled } from "styled-components";
import SearchHeader from "../components/search/SearchHeader";
import SearchFooter from "../components/search/SearchFooter";
import SearchFormContainer from "../containers/SearchFormContaienr";

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

const MainPage = () => (
  <MainPageBlock>
    <SearchHeader />
    <SearchFormContainer />
    <SearchFooter />
  </MainPageBlock>
);

export default MainPage;
