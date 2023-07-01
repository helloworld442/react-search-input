import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import {
  StyledButtonBox,
  StyledInputBox,
  StyledItemBox,
  StyledLogoBox,
  StyledListBox,
} from "../common/StyledBox";

const SearchFormBlock = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
`;

const SearchForm = ({ data, onChange, onSubmit }) => (
  <SearchFormBlock>
    <StyledLogoBox src="https://assets.website-files.com/600425d25fc1287b9232414b/6004282e60565ac5cfd55643_image%202.png" />
    <StyledListBox>
      <form onSubmit={onSubmit}>
        <StyledInputBox
          type="text"
          id="title"
          placeholder="Start typing something..."
          onChange={onChange}
        />
        <StyledButtonBox type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </StyledButtonBox>
      </form>

      {data &&
        data.map((val, idx) => (
          <StyledItemBox key={idx}>
            <div dangerouslySetInnerHTML={{ __html: val.title }} />
            <Link to={val.url}>go to page!</Link>
          </StyledItemBox>
        ))}
    </StyledListBox>
  </SearchFormBlock>
);

export default SearchForm;
