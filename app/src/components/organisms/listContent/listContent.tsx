import React from "react";
import { ListContent as StyledListContent } from "./listContent.styled";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const ListContent = (props: Props) => {
  const { children } = props;
  return (
    <StyledListContent>
      <h2>List content</h2>
      {children}
    </StyledListContent>
  );
};

ListContent.defaultProps = {
  children: "",
};

export default ListContent;
