import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  background-color: var(--dsh-app-main-dark);
  color: var(--dsh-app-main-accents);
  border: 1px solid var(--dsh-app-main-accents);
  border-radius: 6px;

  &:hover {
    background-color: var(--dsh-app-main-accents);
    color: var(--dsh-app-main-dark);
    border: 1px solid var(--dsh-app-main-dark);
  }

  &:focus {
    background-color: var(--dsh-app-main-dark);
    color: var(--dsh-app-main-accents);
    border: 1px solid var(--dsh-app-main-accents);
    cursor: pointer;
  }

  &:focus-visible {
    background-color: var(--dsh-app-main-accents);
    color: var(--dsh-app-main-dark);
    border: 1px solid var(--dsh-app-main-dark);
  }
`;
