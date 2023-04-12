import styled from "styled-components";

export const Card = styled.div`
  width: 48%;
  border: 1px solid black;
  border-radius: 4px;
  flex-grow: 0;
  flex-shrink: 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  border: 0 solid #818a91;
  padding: 16px;

  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  }
`;
