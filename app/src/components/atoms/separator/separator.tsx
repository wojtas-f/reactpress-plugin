import React from "react";
import { Separator as StyledSeparator } from "./separator.styled";

export enum enSizes {
  Small = "small",
  Medium = "medium",
  Big = "big",
}

type Props = {
  children: string;
  size: string;
};

const Separator = (props: Props) => {
  const { children, size } = props;

  return <StyledSeparator>{children}</StyledSeparator>;
};

Separator.defaultProps = {
  children: "",
  size: "small",
};

export default Separator;
