import React from "react";
import Markets from "./Markets";
import { markets } from "../api/markets";

function MarketsList({ selectedFilters }) {
  console.log(selectedFilters);
  const filteredMarkets = markets.filter(markets => {
    let keepMarkets = true;
    if (selectedFilters.distance) {
      switch (selectedFilters.distance) {
        case "<2min":
          keepMarkets = markets.distance < 2;
          break;
        case "<3min":
          keepMarkets = markets.distance < 3;
          break;
        case "<10min":
          keepMarkets = markets.distance < 10;
          break;
        default:
          break;
      }
    }
    if (keepMarkets && selectedFilters.rating) {
      keepMarkets = markets.rating = selectedFilters.rating.lenght;
    }
    if (keepMarkets && selectedFilters.category) {
      keepMarkets = markets.categories.includes(selectedFilters.category);
    }
    return keepMarkets;
    // if (selectedFilters.categories) {
    //   switch (selectedFilters.categories) {
    //     case "salads":
    //       return markets.categories === "salads";
    //     case "healthy":
    //       return markets.categories === "healthy";
    //     case "bio":
    //       return markets.categories === "bio";
    //     default:
    //       break;
    //   }
    //   return markets.categories.includes(selectedFilters.categories);
    // }
    // if (selectedFilters.name === "rating") {
    //   switch (selectedFilters.value) {
    //     case "**":
    //       return markets.rating > 2;
    //     case "***":
    //       return markets.rating > 3;
    //     case "****":
    //       return markets.rating > 4;
    //     default:
    //       break;
    //   }
    // }
    // return true;
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
