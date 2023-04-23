import React, { useState } from "react";
import { Filters as StyledFilters } from "./filters.styled";

import Button from "../../atoms/button/button";
import Search from "../../atoms/textInput/textInput";

const Filters = () => {
  const [search, setSearch] = useState("");

  const handleSearchPhrase = (phrase: string) => {
    console.log("Search:", phrase);
    setSearch(phrase);
  };

  return (
    <StyledFilters>
      <Search
        name="filter-list"
        handleChange={handleSearchPhrase}
        value={search}
      />
      <Button type="submit">Filter</Button>
      <Button type="reset">Clear</Button>
    </StyledFilters>
  );
};

export default Filters;
