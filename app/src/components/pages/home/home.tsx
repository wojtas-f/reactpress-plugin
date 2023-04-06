import React from "react";
import Sidebar from "../../templates/sidebar/sidebar";
import List from "../../templates/list/list";

import { Home as StyledHome } from "./home.styled";

const Home = () => {
  return (
    <StyledHome>
      <List />
      <Sidebar />
    </StyledHome>
  );
};

export default Home;
