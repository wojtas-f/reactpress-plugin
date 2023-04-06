import "./constants.css";

import { App as StyledApp } from "./App.styled";

import Home from "./components/pages/home/home";

function App() {
  return <StyledApp>{<Home />}</StyledApp>;
}

export default App;
