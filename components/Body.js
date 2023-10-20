import React from "react";
// import imagess from "./Images/kfc.jpeg";
import Data from "./Data";
import Cards from "./Cards";

export default function Body() {
  const elem = Data.map((item) => {
    return (
      <div className="dir">
        <Cards
          url={item.data?.url}
          name={item.data.name}
          key={item.data.id}
          area={item.data.area}
        />
      </div>
    );
  });
  return (
    // <div className="cards" >
    //    <img src={props.url} alt="food"  />
    //    <h4>its name is {props.name}</h4>
    //   <h3>its rating is {props.rating}</h3>

    // </div>
    <div className="cards">{elem}</div>
  );
}
