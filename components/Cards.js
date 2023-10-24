import React from "react";


export default function Cards(props) {

  return (
    <>
    
    <div className="cards">
      <img src={props?.url} width="100px"/>
      <h3>{props?.name}</h3>
      <p>{props?.area}</p>
      <h4>{props?.cuisines}</h4>
      
    </div>
    </>
  );
}
