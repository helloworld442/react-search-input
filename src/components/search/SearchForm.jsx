import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import StyledInputBox from "../StyledInputBox";
import StyledButtonBox from "../common/StyledButtonBox";
import StyledLogoBox from "../common/StyledLogoBox";

const SearchFormBlock = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;

  > #search-form {
    width: 600px;
    display: flex;
    justify-content: space-between;
    padding: 36px 24px;
    border-radius: 10px;
    background: #fff;
  }
`;

const SearchForm = ({ title, onChange }) => (
  <SearchFormBlock>
    <StyledLogoBox />
    <form id="search-form">
      <StyledInputBox
        type="text"
        id="title"
        placeholder="Start typing something..."
        value={title}
        onChange={onChange}
      />
      <StyledButtonBox type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </StyledButtonBox>
    </form>
  </SearchFormBlock>
);

export default SearchForm;
