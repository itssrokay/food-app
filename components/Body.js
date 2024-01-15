import React, { useState, useEffect, useCallback } from "react";
import Data from "./Data";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export default function Body() {
  const [listofRes, setList] = useState([]);
  const [allRes, setAllRes] = useState([]);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    console.log("useEffect before fetch");

    // Use a separate function to fetch data
    const fetchData = async () => {
      try {
        // const resData = await fetch(
        //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.283007&lng=76.6476158&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        // );
        const resData=await fetch(
          "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await resData.json();
        console.log("Fetched Data:", json.data);

        // Extract the relevant data
        const restaurants =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        // Update the state with the fetched data
        setList(restaurants);
        setAllRes(restaurants)
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
//search  functionality
const searchResult = () => {
  const filteredRes = allRes.filter(
    (res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  setList(filteredRes);
};

  return (
    listofRes.length === 0 ? (
      <Shimmer/>
    ) :
    <div className="body">
      <div className="filtered-res">
        <input type="text" value={searchText} placeholder="search here.." onChange={(e)=>setSearchText(e.target.value)}
        ></input>
        <button onClick={searchResult}>Search</button>
        <button onClick={handleSort}>Sort Restaurants</button>
      </div>
      <div className="restaurant-list">
        {Array.isArray(listofRes) &&
          listofRes.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={"restra/"+restaurant?.info?.id}><Cards {...restaurant?.info}  /></Link>
          ))}
      </div>
    </div>
  );
}
