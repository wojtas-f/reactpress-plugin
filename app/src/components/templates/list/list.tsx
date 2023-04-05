import React from "react";
import { List as StyledList } from "./list.styled";

import Filters from "../../organisms/filters/filters";
import ListContent from "../../organisms/listContent/listContent";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const List = (props: Props) => {
  const { children } = props;
  return (
    <StyledList>
      <ListContent />
      <Filters />
      {children}
    </StyledList>
  );
};

List.defaultProps = {
  children: "",
};

export default List;
