import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faUser } from "@fortawesome/free-solid-svg-icons";

const SearchHeaderBlock = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const SearchDropDownBox = styled.select`
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 150px;
  height: 60px;
  padding: 15px;
  margin: 24px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
  background: #e0e6eb;
`;

const SearchLinkBox = styled.div`
  font-size: 1.6rem;
  color: gray;
  > .icon {
    margin-right: 24px;
  }
`;

const SearchHeader = ({ onChange }) => (
  <SearchHeaderBlock>
    <SearchDropDownBox onChange={onChange}>
      <option value="web">All articles</option>
      <option value="vclip">VCLIP</option>
      <option value="blog">BLOG</option>
      <option value="cafe">CAFE</option>
    </SearchDropDownBox>
    <SearchLinkBox>
      <FontAwesomeIcon icon={faListUl} className="icon" />
      <FontAwesomeIcon icon={faUser} className="icon" />
    </SearchLinkBox>
  </SearchHeaderBlock>
);

export default SearchHeader;
