import React from "react";
import { CategoriesFilter as StyledCategoriesFilter } from "./categoriesFilter.styled";

import TagType from "../../../types/Tag";
import Checkbox from "../../atoms/checkbox/checkbox";

type Props = {
  tags: TagType[];
};

const CategoriesFilter = (props: Props) => {
  const { tags } = props;
  return (
    <StyledCategoriesFilter>
      {tags.map((tag) => (
        <Checkbox name={tag.name} value={tag.slug} />
      ))}
    </StyledCategoriesFilter>
  );
};

CategoriesFilter.defaultProps = {
  tags: [],
};

export default CategoriesFilter;
