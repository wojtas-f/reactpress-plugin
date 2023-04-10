import React from "react";
import { ListContent as StyledListContent } from "./listContent.styled";
import Card from "../../molecules/card/card";

import Product from "../../../types/Product";

type Props = {
  products: Product[];
};

const ListContent = (props: Props) => {
  const { products } = props;
  return (
    <StyledListContent>
      {products.map((product) => (
        <Card product={product} />
      ))}
    </StyledListContent>
  );
};

ListContent.defaultProps = {
  products: [],
};

export default ListContent;
