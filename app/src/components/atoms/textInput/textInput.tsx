import React from "react";
import { TextInput as StyledTextInput } from "./textInput.styled";

type Props = {
  value: any;
  placeholder: string;
  name: string;
};

const TextInput = (props: Props) => {
  const { value } = props;
  return <StyledTextInput type="text" value={value} />;
};

TextInput.defaultProps = {
  value: "",
  placeholder: "Search...",
};

export default TextInput;
