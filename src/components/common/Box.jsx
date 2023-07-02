import { styled } from "styled-components";

export const StyledButtonBox = styled.button`
  padding: 8px 0;
  background: transparent;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 1.6rem;
`;

export const StyledInputBox = styled.input`
  width: 500px;
  height: 80px;
  border: none;
  font-size: 1.6rem;
  font-color: #d5d5d5;
`;

export const StyledItemBox = styled.li`
  position: relative;
  height: 80px;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    width: 30vw;
    margin-right: 24px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1rem;
  }
  b {
    color: red;
  }
`;

export const StyledListBox = styled.ul`
  padding: 24px;
  box-sizing: border-box;
  border-radius: 10px;
  background: #fff;
  form {
    width: 600px;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledLogoBox = styled.img`
  margin-bottom: 24px;
`;
