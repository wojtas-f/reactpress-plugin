import styled from "styled-components";

export const Tag = styled.span.attrs({
  tabIndex: 0,
})`
  font-size: 0.75rem;
  line-height: 0.875rem;
  border-radius: 4px;
  border: 1px solid black;
  padding: 2px 4px;

  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }

  :focus-visible {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
