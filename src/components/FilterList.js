import React from "react";
import Filter from "./Filter";
import { filter } from "../api/filter";

function FilterList() {
  return (
    <div className="FilterList">
      {filter.map(filter => {
        return <Filter key={filter.name} filter={filter} />;
      })}
    </div>
  );
}

export default FilterList;
