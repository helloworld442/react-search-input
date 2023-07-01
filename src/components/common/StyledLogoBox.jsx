import { styled } from "styled-components";

//로고 많이 쓰일 것이라고 예상해서 따로 빼둠

const StyledLogoBlock = styled.img`
  margin-bottom: 24px;
`;

const StyledLogoBox = () => (
  <StyledLogoBlock src="https://assets.website-files.com/600425d25fc1287b9232414b/6004282e60565ac5cfd55643_image%202.png" />
);

export default StyledLogoBox;
