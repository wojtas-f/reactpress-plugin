import styled from "styled-components";

export const TextInput = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 3px solid transparent !important;

  &:focus {
    border: 3px solid var(--dsh-app-main-dark) !important;
  }
`;
