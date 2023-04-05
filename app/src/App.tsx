import List from "./components/templates/list/list";

import styled from "styled-components";

export const StyledApp = styled.div`
  width: 100%;
  background-color: #b6b6b675;
`;

function App() {
  return (
    <StyledApp>
      <List />
    </StyledApp>
  );
}

export default App;
