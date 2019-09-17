import React from "react";
import Markets from "./Markets";
import { markets } from "../api/markets";

function MarketsList({ selectedFilters }) {
  console.log(selectedFilters);
  const filteredMarkets = markets.filter(markets => {
    if (!selectedFilters) {
      return true;
    }
    if (selectedFilters.distance) {
      switch (selectedFilters.distance) {
        case "< 2min":
          return markets.distance < 2;
        case "< 3min":
          return markets.distance < 3;
        case "< 10min":
          return markets.distance < 10;
        default:
          break;
      }
    }
    if (selectedFilters.categories) {
      switch (selectedFilters.categories) {
        case "salads":
          return markets.categories === "salads";
        case "healthy":
          return markets.categories === "healthy";
        case "bio":
          return markets.categories === "bio";
        default:
          break;
      }
      return markets.categories.includes(selectedFilters.categories);
    }
    if (selectedFilters.name === "rating") {
      switch (selectedFilters.value) {
        case "**":
          return markets.rating > 2;
        case "***":
          return markets.rating > 3;
        case "****":
          return markets.rating > 4;
        default:
          break;
      }
    }
    return true;
  });

  return (
    <div className="MarketList">
      {filteredMarkets.map(markets => {
        return <Markets key={markets.title} markets={markets} />;
      })}
    </div>
  );
}

export default MarketsList;
