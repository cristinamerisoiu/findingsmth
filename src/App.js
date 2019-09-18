import React from "react";
import "./App.css";
import FilterList from "./components/FilterList";
import Title from "./components/Header";
// import Markets from "./components/Markets";
import MarketsList from "./components/MarketsList";
import styled from "styled-components";

const StyledApp = styled.div`
  background: lightblue;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [filters, setFilters] = React.useState({
    distance: "< 1min"
  });

  function handleFilterChange(name, value) {
    const newFilters = { ...filters };
    if (value) {
      newFilters[name] = value;
    } else {
      delete newFilters[name];
    }
    setFilters(newFilters);
  }
  //const newFilter = {
  //name: name,
  //value: value
  //};

  // or Object.assign({}, filters)
  //setFilters(newFilter);

  return (
    <>
      <StyledApp>
        <Title />
        <Main>
          <FilterList
            selectedFilters={filters}
            onFilterChange={handleFilterChange}
          />
          <MarketsList selectedFilters={filters} />
        </Main>
      </StyledApp>
    </>
  );
}

export default App;
