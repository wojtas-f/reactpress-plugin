import React from "react";
import { Tag as StyledTag } from "./tag.styled";

type Props = {
  children: string;
};

const Tag = (props: Props) => {
  const { children } = props;
  return <StyledTag>{children}</StyledTag>;
};

Tag.defaultProps = {
  children: "",
};

export default Tag;
