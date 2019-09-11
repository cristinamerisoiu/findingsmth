import React from "react";
import Filter from "./Filter";
function FilterList() {
  return (
    <div className="FilterList">
      <button className="badges">Price</button>
      <button className="badges">Distance</button>
      <button className="badges">Specialities</button>
    </div>
  );
}

export default FilterList;
