import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import StyledInputBox from "../StyledInputBox";
import StyledButtonBox from "../common/StyledButtonBox";
import StyledLogoBox from "../common/StyledLogoBox";
import StyledFormBox from "../StyledFormBox";
import StyledListBox from "../StyledListBox";
import StyledItemBox from "../common/StyledItemBox";
import { Link } from "react-router-dom";

const SearchFormBlock = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
`;

const SearchForm = ({ title, data, onChange, onSubmit, check }) => (
  <SearchFormBlock>
    <StyledLogoBox />
    <StyledFormBox onSubmit={onSubmit}>
      <StyledInputBox
        type="text"
        id="title"
        placeholder="Start typing something..."
        value={title}
        onChange={onChange}
        required={true}
      />
      <StyledButtonBox type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </StyledButtonBox>
    </StyledFormBox>
    <StyledListBox>
      {data &&
        data.map((val, idx) => (
          <StyledItemBox key={idx}>
            <h2>{check(val.title)}</h2>
            <Link to={val.url}>go to page!</Link>
          </StyledItemBox>
        ))}
    </StyledListBox>
  </SearchFormBlock>
);

export default SearchForm;
