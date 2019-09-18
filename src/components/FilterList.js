import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import { filter } from "../api/filter";

const Div = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f4f1bb;
`;

function FilterSelection({ onFilterChange, selectedFilters }) {
  return (
    <Div>
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
    </Div>
  );
}

export default FilterSelection;
