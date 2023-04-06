import * as React from "react";
import { Button as StyledButton } from "./button.styled";

const ButtonType = {
  BUTTON: "button",
  SUBMIT: "submit",
};

type Props = {
  type: "button" | "submit" | "reset";
  children: string | JSX.Element | JSX.Element[];
};

const Button = (props: Props) => {
  const { children, type } = props;
  return <StyledButton type={type}>{children}</StyledButton>;
};

Button.defaultProps = {
  type: ButtonType.BUTTON,
  children: "",
};

export default Button;
