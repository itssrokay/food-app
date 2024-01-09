import React, { useState, useEffect } from "react";
import Data from "./Data";
import Cards from "./Cards";

export default function Body() {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(Data);
  const newArray = [];
  newArray.push(...Data);
  // useEffect(() => {
  //   getRestra();
  // },[]);

  async function getRestra(){
    const da=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
    const json=await da.json();
    console.log(json)
    // setRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }
console.log("rendi")
  function filterRes(searchInput, newArray) {
    const filterData = newArray.filter((restaurant) =>
      restaurant.data.name.includes(searchInput)
    );
    return filterData;
  }

  const elem = restaurants.map((item) => {
    return (
      <>
        <div className="dir">
        {Data.map((restaurant) => {
        return <Cards {...restaurant.data} key={restaurant.data.id} />;
      })}
            // url={item?.data?.url}
            // name={item?.data?.name}
            // key={item?.data?.id}
            // area={item?.data?.area}
            // cuisines={item?.data?.cuisines}
          {/* /> */}
        </div>
      </>
    );
  });

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const resultant = filterRes(searchInput, newArray);
            setRestaurants(resultant);
          }}
        >
          Bang
        </button>
      </div>
      <div className="cards">{elem}</div>
    </>
  );
}