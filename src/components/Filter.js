import React from "react";

function Filter(props) {
  return (
    <select
      className="filter"
      onChange={event => {
        props.onChange(props.filter.name, event.target.value);
      }}
    >
      <option className="badges">{props.filter.name}</option>
      {props.filter.options.map(singleFilter => {
        return <option key={singleFilter}>{singleFilter}</option>;
      })}
    </select>
  );
}

export default Filter;
