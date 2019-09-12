import React from "react";
function Filter(props) {
  return (
    <select className="filter">
      <option className="badges">{props.filter.name}</option>

      {props.filter.options.map(singleFilter => {
        return <option key={singleFilter.option}>{singleFilter}</option>;
      })}
    </select>
  );
}

export default Filter;
