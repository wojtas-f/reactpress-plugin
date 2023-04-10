import React from "react";
import { Description as StyledDescription } from "./description.styled";

type Props = {
  children: string;
};

const Description = (props: Props) => {
  const { children } = props;
  return <StyledDescription>{children}</StyledDescription>;
};

Description.defaultProps = {
  children: "",
};

export default Description;
