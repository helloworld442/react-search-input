import { styled } from "styled-components";
import { Link } from "react-router-dom";
const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  b {
    color: red;
  }
  div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 400px;
  }
  Link {
    width: 100px;
  }
`;

export const ItemListBox = ({ data }) => {
  return (
    data &&
    data.map((val, idx) => (
      <ItemBox key={idx}>
        <div dangerouslySetInnerHTML={{ __html: val.title }} />
        <Link to={val.url}>go to page!</Link>
      </ItemBox>
    ))
  );
};
