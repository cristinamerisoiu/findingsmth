import React from "react";
function Markets(props) {
  return (
    <div className="market">
      {props.markets.title}
      <img src={props.markets.imgSrc} alt={props.markets.title} />
      <p>{props.markets.description}</p>
    </div>
  );
}

export default Markets;
