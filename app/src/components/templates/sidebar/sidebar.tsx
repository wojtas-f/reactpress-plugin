import React from "react";
import { Sidebar as StyledSidebar } from "./sidebar.styled";

import Filters from "../../organisms/filters/filters";
import Title from "../../atoms/title/title";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Title>Filters</Title>
      <Filters />
    </StyledSidebar>
  );
};

export default Sidebar;
