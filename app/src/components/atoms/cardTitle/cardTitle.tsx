import React from "react";
import { CardTitle as StyledCardTitle } from "./cardTitle.styled";

type Props = {
  children: string;
};

const CardTitle = (props: Props) => {
  const { children } = props;
  return <StyledCardTitle>{children}</StyledCardTitle>;
};

CardTitle.defaultProps = {
  children: "",
};

export default CardTitle;
