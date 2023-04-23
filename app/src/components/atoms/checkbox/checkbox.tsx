import React from "react";
import { Checkbox as StyledCheckbox } from "./checkbox.styled";

type Props = {
  value: any;
  name: string;
};

const Checkbox = (props: Props) => {
  const { value } = props;
  return <StyledCheckbox type="checkbox" value={value} />;
};

Checkbox.defaultProps = {
  value: "",
};

export default Checkbox;
