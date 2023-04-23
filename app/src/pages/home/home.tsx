import React, { useState, useEffect } from "react";
import Sidebar from "../../components/templates/sidebar/sidebar";
import List from "../../components/templates/list/list";

import { Home as StyledHome } from "./home.styled";
import api from "../../services/config";
import filter from "../../filters/filters";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [tags, setTags] = useState([]);
  const [filters, setFilters] = useState([]);

  const getData = async () => {
    const res = await api.getProducts();

    if (res.products) setProducts(res.products);
    if (res.tags) setTags(res.tags);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledHome>
      <List products={filter(filters, products)} />
      <Sidebar />
    </StyledHome>
  );
};

export default Home;
