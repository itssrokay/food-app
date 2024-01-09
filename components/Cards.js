import React from "react";


export default function Cards({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) {

  return (
    <>
    
    <div className="cards">
    <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId
        }
        width="200px"
      />
      {/* <img src={props?.url} width="100px"/> */}
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
      
    </div>
    </>
  );
}
