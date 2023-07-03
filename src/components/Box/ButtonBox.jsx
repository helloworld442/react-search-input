import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 1.6rem;
`;

export const ButtonBox = ({ icon }) => (
  <Button>
    <FontAwesomeIcon icon={icon} />
  </Button>
);
