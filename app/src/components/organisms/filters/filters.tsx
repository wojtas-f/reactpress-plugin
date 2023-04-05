import React from "react";
import { Filters as StyledFilters } from "./filters.styled";

import Button from "../../atoms/button/button";
import Search from "../../molecules/search/search";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Filters = (props: Props) => {
  const { children } = props;
  return (
    <StyledFilters>
      <Search />
      {children}
      <Button>Filter</Button>
      <Button>Clear</Button>
    </StyledFilters>
  );
};

Filters.defaultProps = {
  children: "",
};

export default Filters;
