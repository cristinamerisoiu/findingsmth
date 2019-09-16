import React from "react";
import "./App.css";
import FilterList from "./components/FilterList";
import Header from "./components/Header";
// import Markets from "./components/Markets";
import MarketsList from "./components/MarketsList";

function App() {
  function handleFilterChange(name, value) {
    console.log(`${name}: ${value}`);
  }
  return (
    <div className="App">
      <Header />
      <main className="main">
        <FilterList onFilterChange={handleFilterChange} />
        <MarketsList />
      </main>
    </div>
  );
}

export default App;
