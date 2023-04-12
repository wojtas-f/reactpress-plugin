import React, { useState, useEffect } from "react";
import Sidebar from "../../components/templates/sidebar/sidebar";
import List from "../../components/templates/list/list";

import { Home as StyledHome } from "./home.styled";
import api from "../../services/config";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const res = await api.getProducts();
    console.log("res", res);
    if (res) setProducts(res);
    else setProducts([]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledHome>
      <List products={products} />
      <Sidebar />
    </StyledHome>
  );
};

export default Home;
