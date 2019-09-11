import React from "react";
import "./App.css";
import FilterList from "./components/FilterList";
import Header from "./components/Header";
import Markets from "./components/Markets";
import MarketsList from "./components/MarketsList";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <FilterList />
        <MarketsList />
      </main>
    </div>
  );
}

export default App;
