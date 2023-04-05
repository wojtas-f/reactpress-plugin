import React from "react";
import { Search as StyledSearch } from "./search.styled";

import TextInput from "../../atoms/textInput/textInput";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Search = (props: Props) => {
  const { children } = props;
  return (
    <StyledSearch>
      {children}
      <TextInput name="filter-list" />
    </StyledSearch>
  );
};

Search.defaultProps = {
  children: "",
};

export default Search;
