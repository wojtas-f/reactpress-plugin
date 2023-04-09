import React from "react";
import { ListContent as StyledListContent } from "./listContent.styled";
import Title from "../../atoms/title/title";

import Product from "../../../types/Product";

type Props = {
  products: Product[];
};

const ListContent = (props: Props) => {
  const { products } = props;
  return (
    <StyledListContent>
      {products.map((product) => (
        <Title>{product.post_title} </Title>
      ))}
    </StyledListContent>
  );
};

ListContent.defaultProps = {
  products: [],
};

export default ListContent;
