import React from "react";
import { Title as StyledTitle } from "./title.styled";

type Props = {
  // children: string;
  children: any;
};

const Title = (props: Props) => {
  const { children } = props;
  return <StyledTitle>{children}</StyledTitle>;
};

Title.defaultProps = {
  children: "",
};

export default Title;
