import React, { useState, useEffect } from "react";
import Filters from "../../components/organisms/filters/filters";
import List from "../../components/organisms/list/list";

import { Home as StyledHome } from "./home.styled";
import api from "../../services/config";
import filter from "../../filters/filters";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [tags, setTags] = useState([]);
  const [filters, setFilters] = useState([]);

  const getData = async () => {
    const res = await api.getProducts();
    console.log("res:", res.tags);
    if (res.products) setProducts(res.products);
    if (res.tags) {
      console.log("set tags");
      setTags(res.tags);
      console.log(tags);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledHome>
      <List products={filter(filters, products)} />
      <Filters tags={tags} />
    </StyledHome>
  );
};

export default Home;
