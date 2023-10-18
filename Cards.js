import React from "react";
import imagess from "./Images/kfc.jpeg";

export default function Cards(props) {
  return (
    <div className="cards">
      <img src={imagess}  width="100px"/>
      <h3>{props.x}</h3>
      <p>{props.c}</p>
      
    </div>
  );
}
