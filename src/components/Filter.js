import React from "react";
function Filter(props) {
  return (
    <select className="filter">
      <option className="badges">{props.filter.name}</option>
      <option className="badges">{props.filter.options}</option>
      <option className="badges">{props.filter.options}</option>
      <option className="badges">{props.filter.options}</option>
    </select>
  );
}

export default Filter;
