import React from "react";
import "./App.css";
import FilterList from "./components/FilterList";
import Header from "./components/Header";
// import Markets from "./components/Markets";
import MarketsList from "./components/MarketsList";

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
      <div className="App">
        <Header />
        <main className="main">
          <FilterList
            selectedFilters={filters}
            onFilterChange={handleFilterChange}
          />
          <MarketsList selectedFilters={filters} />
        </main>
      </div>
    </>
  );
}

export default App;
