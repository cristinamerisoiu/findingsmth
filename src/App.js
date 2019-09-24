import React from "react";
import "./App.css";
// import Markets from "./components/Markets";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";

const StyledApp = styled.div`
  background: lightblue;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

//const newFilter = {
//name: name,
//value: value
//};

// or Object.assign({}, filters)
//setFilters(newFilter);
function App() {
  return (
    <>
      <StyledApp>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/new" exact component={New} />
        </Router>
      </StyledApp>
    </>
  );
}

export default App;
