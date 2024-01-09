import React, { useState, useEffect } from "react";
import Data from "./Data";
import Cards from "./Cards";

export default function Body() {
  return (
    <div className="restaurant-list">
      {Data.map((restaurant) => {
        return <Cards {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
}

