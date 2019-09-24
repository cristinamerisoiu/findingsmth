import React from "react";
import FilterList from "../components/FilterList";
import MarketsList from "../components/MarketsList";
import Title from "../components/Header";
import styled from "styled-components";

const Main = styled.main`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home({ location, history }) {
  const params = new URLSearchParams(location.search);
  const [filters, setFilters] = React.useState({
    category: params.get("categories"),
    distance: params.get("distance"),
    rating: params.get("rating")
  });

  function handleFilterChange(name, value) {
    const newFilters = { ...filters };
    if (value) {
      newFilters[name] = value;
    } else {
      delete newFilters[name];
    }
    setFilters(newFilters);
    history.push(`/category=seafood`);
  }

  return (
    <>
      <Title />
      <Main>
        <FilterList
          selectedFilters={filters}
          onFilterChange={handleFilterChange}
        />
        <MarketsList selectedFilters={filters} />
      </Main>
    </>
  );
}
