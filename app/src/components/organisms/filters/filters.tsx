import React from "react";
import { Filters as StyledFilters } from "./filters.styled";

import Button from "../../atoms/button/button";
import Search from "../../molecules/search/search";

const Filters = () => {
  return (
    <StyledFilters>
      <Search />
      <Button type="submit">Filter</Button>
      <Button type="reset">Clear</Button>
    </StyledFilters>
  );
};

export default Filters;
