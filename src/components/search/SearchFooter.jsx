import { styled } from "styled-components";

const SearchFooterBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 30px;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background: #e0e6eb;
  color: #333;
  font-weight: 600;
`;

const SearchFooter = () => (
  <SearchFooterBlock>
    <span>Made by : MIN / Feel free to clone this project</span>
    <span>Powered by React</span>
  </SearchFooterBlock>
);

export default SearchFooter;
