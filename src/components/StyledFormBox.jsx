import { styled } from "styled-components";

const StyledFormBox = styled.form`
  width: 600px;
  display: flex;
  justify-content: space-between;
  padding: 36px 24px;
  margin-top: 24px;
  border-radius: 10px;
  background: #fff;
  &:hover,
  &:valid {
    border-radius: 0;
  }
`;

export default StyledFormBox;
