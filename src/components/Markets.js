import React from "react";
function Markets(props) {
  return (
    <div className="market">
      <p className="market__title">{props.markets.title}</p>
      <img
        src={props.markets.imgSrc}
        className="img__market"
        alt={props.markets.title}
      />
      <p className="market__description">{props.markets.description}</p>
      <p className="market__prop">
        {" "}
        Distance: {props.markets.distance} minutes
        <br />
        Rating: {props.markets.rating} stars
        <br />
        Categories:{""}
        {props.markets.categories.map(category => {
          return (
            <span className="card__category" key={category}>
              {category}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default Markets;
