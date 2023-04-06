import React from "react";

import { List as StyledList } from "./list.styled";
import ListContent from "../../organisms/listContent/listContent";

const List = () => {
  return (
    <StyledList>
      <ListContent />
    </StyledList>
  );
};

export default List;
