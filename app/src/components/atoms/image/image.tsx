import React from "react";
import { Image as StyledImage } from "./image.styled";

type Props = {
  src: string;
};

const Image = (props: Props) => {
  const { src } = props;
  return <StyledImage src={src} />;
};

export default Image;
