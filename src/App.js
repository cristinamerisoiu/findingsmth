import React from "react";
import "./App.css";
import FilterList from "./components/FilterList";
import Header from "./components/Header";
// import Markets from "./components/Markets";
import MarketsList from "./components/MarketsList";

function App() {
  const [filters, setFilters] = React.useState({});

  function handleFilterChange(name, value) {
    //const newFilter = {
    //name: name,
    //value: value
    //};

    const newFilters = { ...filters }; // or Object.assign({}, filters)
    newFilters[name] = value;
    setFilters(newFilters);
    //setFilters(newFilter);
  }

  return (
    <>
      <div className="App">
        <Header />
        <main className="main">
          <FilterList onFilterChange={handleFilterChange} />
          <MarketsList selectedFilters={filters} />
        </main>
      </div>
    </>
  );
}

export default App;
