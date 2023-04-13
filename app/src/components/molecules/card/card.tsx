import React from "react";
import { Card as StyledCard } from "./card.styled";

import Product from "../../../types/Product";

import CardTitle from "../../atoms/cardTitle/cardTitle";
import Description from "../../atoms/description/description";
import Image from "../../atoms/image/image";
import Tags from "../tags/tags";

type Props = {
  product: Product;
};

const Card = (props: Props) => {
  const { product } = props;
  return (
    <StyledCard>
      <CardTitle>{product.title}</CardTitle>
      <Tags tags={product.tags} />
      {product.thumbnail && <Image src={product.thumbnail} />}
      <Description>{product.title}</Description>
    </StyledCard>
  );
};

export default Card;
