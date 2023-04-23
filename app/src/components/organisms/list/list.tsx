import React from "react";
import { List as StyledList } from "./list.styled";
import Card from "../../molecules/card/card";

import Product from "../../../types/Product";

type Props = {
  products: Product[];
};

const List = (props: Props) => {
  const { products } = props;
  return (
    <StyledList>
      {products.map((product) => (
        <Card product={product} />
      ))}
    </StyledList>
  );
};

List.defaultProps = {
  products: [],
};

export default List;
