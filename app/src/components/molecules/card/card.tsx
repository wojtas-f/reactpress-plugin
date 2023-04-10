import React from "react";
import { Card as StyledCard } from "./card.styled";

import Product from "../../../types/Product";

import CardTitle from "../../atoms/cardTitle/cardTitle";
import Description from "../../atoms/description/description";

type Props = {
  product: Product;
};

const Card = (props: Props) => {
  const { product } = props;
  return (
    <StyledCard>
      <CardTitle>{product.post_title}</CardTitle>
      <Description>{product.post_title}</Description>
    </StyledCard>
  );
};

export default Card;
