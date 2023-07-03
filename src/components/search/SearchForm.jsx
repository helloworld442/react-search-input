import { styled } from "styled-components";
import { LogoBox } from "../Box/LogoBox";
import { FormBox } from "../Box/FormBox";
import { InputBox } from "../Box/InputBox";
import { ButtonBox } from "../Box/ButtonBox";
import { ItemListBox } from "../Box/ItemsBox";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
    <LogoBox />
    <FormBox onSubmit={onSubmit}>
      <InputBox onChange={onChange} />
      <ButtonBox icon={faMagnifyingGlass} />
      <ItemListBox data={data} />
    </FormBox>
  </SearchFormBlock>
);

export default SearchForm;

// 추상화가 되지 않는다.
// 높은 추상화와 낮은 추상화가 썪여저있다.
// onchange , onSubmit 등 이 함수가 무슨 역할을 하는 지 명확하지 않다.
