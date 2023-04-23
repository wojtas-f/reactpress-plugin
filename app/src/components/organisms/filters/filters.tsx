import React, { useState } from "react";
import { Filters as StyledFilters } from "./filters.styled";

import Button from "../../atoms/button/button";
import Search from "../../atoms/textInput/textInput";
import Title, { enSizes } from "../../atoms/title/title";
import Separator from "../../atoms/separator/separator";

type Props = {
  tags: any[];
};

const Filters = (props: Props) => {
  const { tags } = props;
  const [search, setSearch] = useState("");

  const handleSearchPhrase = (phrase: string) => {
    console.log("Search:", phrase);
    setSearch(phrase);
  };

  return (
    <StyledFilters>
      <Title size={enSizes.Big}>Filters</Title>

      <Title size={enSizes.Small}>Enter phrase:</Title>
      <Search
        name="filter-list"
        handleChange={handleSearchPhrase}
        value={search}
      />

      <Title size={enSizes.Small}>Filter by tag:</Title>
      {tags && tags.map((tag) => <span>{tag.name}</span>)}

      <Button type="submit">Filter</Button>
      <Button type="reset">Clear</Button>
    </StyledFilters>
  );
};

Filters.defaultProps = {
  tags: [],
};

export default Filters;
