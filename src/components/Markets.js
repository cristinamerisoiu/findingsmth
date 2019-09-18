import React from "react";
import styled from "styled-components";

const MarketDescription = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #428c7f;
  margin: 15px;
  height: 45vh;
  width: 500px;
  border-radius: 10px;
  box-shadow: 10px 10px 8px #888888;
`;

const ImageMarket = styled.img`
  height: 200px;
  margin: 10px;
  @media (min-width: 320px) and (max-width: 480px) {
    height: 120px;
  }
`;

const MarketProperties = styled.p`
  text-decoration: underline;
  font-size: 15px;
  margin-right: 20px;
  color: antiquewhite;
  font-weight: bold;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0;
  }
`;

const MarketTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const MarketProps = styled.p`
  color: antiquewhite;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0;
  }
`;

const Card = styled.span`
  margin-right: 10px;
  font-weight: bold;
`;

function Markets(props) {
  return (
    <MarketDescription>
      <MarketTitle>{props.markets.title}</MarketTitle>
      <ImageMarket
        src={props.markets.imgSrc}
        className="img__market"
        alt={props.markets.title}
      />
      <MarketProperties>{props.markets.description}</MarketProperties>
      <MarketProps>
        {" "}
        Distance: {props.markets.distance} minutes
        <br />
        Rating: {props.markets.rating} stars
        <br />
        Categories:{""}
        {props.markets.categories.map(category => {
          return <Card key={category}>{category}</Card>;
        })}
      </MarketProps>
    </MarketDescription>
  );
}

export default Markets;
