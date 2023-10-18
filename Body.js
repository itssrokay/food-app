import React from "react";
import imagess from "./Images/kfc.jpeg";

export default function Body(props) {
  return (
    <div className="cards" >
       <img src={props.url} alt="food"  />
       <h4>its name is {props.name}</h4>
      <h3>its rating is {props.rating}</h3>
      
     
    </div>
  );
}
