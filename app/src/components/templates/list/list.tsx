import React from "react";

import { List as StyledList } from "./list.styled";
import ListContent from "../../organisms/listContent/listContent";

import Product from "../../../types/Product";

type Props = {
  products: Product[];
};

const List = (props: Props) => {
  const { products } = props;
  return (
    <StyledList>
      <ListContent products={products} />
    </StyledList>
  );
};

ListContent.defaultProps = {
  products: [],
};

export default List;
