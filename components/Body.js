import React, { useState } from "react";
import Data from "./Data";
import Cards from "./Cards";

export default function Body() {
  const [searchInput,setSearchInput]=useState("");
  const[restaurants,setRestaurants]=useState(Data);

  function filterRes(searchInput,restaurants){
    const filterData=restaurants.filter((restaurant)=>
    restaurant.data.name.includes(searchInput)
    );
    return filterData;
   
  }

  const elem = restaurants.map((item) => {
    return (
      <>
      <div className="dir">
        <Cards
          url={item.data?.url}
          name={item.data.name}
          key={item.data.id}
          area={item.data.area}
        />
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
         onChange={(e)=>
          setSearchInput(e.target.value)
           }
         />
        
         <button 
         className="search-btn" 
         onClick={()=>
          {
           const resultant= filterRes(searchInput,restaurants);
           setRestaurants(resultant)
          }
          }>Bang</button>
      </div>
    <div className="cards">{elem}</div>
    </>
  );
}
