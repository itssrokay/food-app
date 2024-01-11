import React from "react";


export default function Cards({
  name,
  avgRating,
  cloudinaryImageId,
  areaName,
  costForTwo,
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
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
      <h4>{areaName}</h4>
      
    </div>
    </>
  );
}
