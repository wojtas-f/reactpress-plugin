import React from "react";
import { SmallTitle, MediumTitle, BigTitle } from "./title.styled";

export enum enSizes {
  Small = "small",
  Medium = "medium",
  Big = "big",
}

type Props = {
  children: string;
  size: string;
};

const Title = (props: Props) => {
  const { children, size } = props;
  switch (size) {
    case enSizes.Small:
      return <SmallTitle>{children}</SmallTitle>;
    case enSizes.Medium:
      return <MediumTitle>{children}</MediumTitle>;
    case enSizes.Big:
      return <BigTitle>{children}</BigTitle>;
    default:
      return <SmallTitle>{children}</SmallTitle>;
  }
};

Title.defaultProps = {
  children: "",
  size: "small",
};

export default Title;
