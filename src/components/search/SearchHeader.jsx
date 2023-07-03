import { styled } from "styled-components";
import { faListUl, faUser } from "@fortawesome/free-solid-svg-icons";
import { ButtonBox } from "../Box/ButtonBox";
import { DropDownBox } from "../Box/DropDownBox";
import { LinkBox } from "../Box/LinkBox";

const SearchHeaderBlock = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const SearchHeader = ({ onChange }) => (
  <SearchHeaderBlock>
    <DropDownBox onChange={onChange}>
      <option value="web">All articles</option>
      <option value="vclip">VCLIP</option>
      <option value="blog">BLOG</option>
      <option value="cafe">CAFE</option>
    </DropDownBox>
    <LinkBox>
      <ButtonBox icon={faListUl} />
      <ButtonBox icon={faUser} />
    </LinkBox>
  </SearchHeaderBlock>
);

export default SearchHeader;

//높은 추상화와 낮은 추상화가 섞어져 있다.
// onchange가 어떤 역할을 하는 함수인지 명확하게 와닿지 않는다.
