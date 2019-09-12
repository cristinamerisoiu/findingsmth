import React from "react";
import Markets from "./Markets";
import { markets } from "../api/markets";
function MarketsList() {
  return (
    <div className="MarketList">
      {markets.map(markets => {
        return <Markets key={markets.title} markets={markets} />;
      })}
    </div>
  );
}

export default MarketsList;
