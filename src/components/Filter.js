import React from "react";
import styled from "styled-components";

const FilterChange = styled.select`
  background: rgb(218, 218, 224);
  color: ${props => (props.value ? "red" : null)};
  font-size: 15px;
  border: ${props => (props.value ? "black 3px solid" : "red 2 px solid")};
  border-radius: 3px;
`;

const Badges = styled.option`
  background: #9bc1bc;
`;
function Filter({ onChange, filter, selectedValue }) {
  return (
    <FilterChange
      onChange={event => {
        onChange(filter.name, event.target.value);
      }}
      value={selectedValue}
    >
      <Badges value="">{filter.name}</Badges>
      {filter.options.map(option => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </FilterChange>
  );
}

export default Filter;
