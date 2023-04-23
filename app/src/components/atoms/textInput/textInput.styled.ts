import styled from "styled-components";

export const TextInput = styled.input.attrs({
  placeholder: "Search...",
})`
  width: 100%;
  border-radius: 4px;
  border: 3px solid transparent !important;
  border-bottom: 1px solid var(--dsh-app-main-dark) !important;
  background-color: red;

  &:focus {
    border: 3px solid var(--dsh-app-main-dark) !important;
  }
`;
