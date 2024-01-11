import React, { useState, useEffect } from "react";
import Data from "./Data";
import Cards from "./Cards";
import Shimmer from "./Shimmer";

export default function Body() {
  const [listofRes, setList] = useState([]);

  useEffect(() => {
    console.log("useEffect before fetch");

    // Use a separate function to fetch data
    const fetchData = async () => {
      try {
        const resData = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.283007&lng=76.6476158&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await resData.json();
        console.log("Fetched Data:", json.data);

        // Extract the relevant data
        const restaurants =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        // Update the state with the fetched data
        setList(restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array means it runs once on mount

  function handleSort() {
    // Modify the sorting logic based on the actual structure of your data
    let filteredRes = listofRes.filter((res) => res.info.avgRating > 4);
    setList(filteredRes);
  }
 //shimmer ui


  return (
    listofRes.length === 0 ? (
      <Shimmer/>
    ) :
    <div className="body">
      <div className="filtered-res">
        <button onClick={handleSort}>Sort Restaurants</button>
      </div>
      <div className="restaurant-list">
        {Array.isArray(listofRes) &&
          listofRes.map((restaurant) => (
            <Cards {...restaurant?.info} key={restaurant?.info?.id} />
          ))}
      </div>
    </div>
  );
}
