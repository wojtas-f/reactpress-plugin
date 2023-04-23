import React from "react";
import { TextInput as StyledTextInput } from "./textInput.styled";

type Props = {
  value: any;
  placeholder: string;
  name: string;
  handleChange: (phrase: string) => void;
};

const TextInput = (props: Props) => {
  const { value, handleChange } = props;
  return (
    <StyledTextInput
      type="text"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

TextInput.defaultProps = {
  value: "",
  placeholder: "Search...",
};

export default TextInput;
