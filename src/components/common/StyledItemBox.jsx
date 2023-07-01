import { styled } from "styled-components";

//item box는 많이 쓰여서 제사용성으로 빼둠
const StyledItemBox = styled.li`
  position: relative;
  height: 80px;
  padding: 0 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > h2 {
    width: 30vw;
    margin-right: 24px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1rem;
  }
`;

export default StyledItemBox;
