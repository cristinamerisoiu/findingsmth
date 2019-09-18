import React from "react";
import Filter from "./Filter";
import { filter } from "../api/filter";

function FilterList({ onFilterChange, selectedFilters }) {
  return (
    <div className="FilterList">
      {filter.map(filter => {
        return (
          <Filter
            key={filter.name}
            filter={filter}
            onChange={onFilterChange}
            selectedValue={selectedFilters[filter.name]}
          />
        );
      })}
    </div>
  );
}

export default FilterList;
