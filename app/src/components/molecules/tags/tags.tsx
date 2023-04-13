import React from "react";
import { Tags as StyledTags } from "./tags.styled";

import Tag from "../../atoms/tag/tag";

type Props = {
  tags: string[];
};

const Tags = (props: Props) => {
  const { tags } = props;
  return (
    <StyledTags>
      {tags && tags.map((tag: string) => <Tag>{tag}</Tag>)}
    </StyledTags>
  );
};

Tags.defaultProps = {
  tags: [],
};

export default Tags;
