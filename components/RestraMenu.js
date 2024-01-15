import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestraMenu = () => {
  const [resInfo, setResInfo] = useState(null);
 const {resId}=useParams();
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await fetch(
          "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+resId+"&submitAction=ENTER"
        );
        const json = await data.json();
        console.log("menu", json);
        setResInfo(json.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <>
      <h1>{name}</h1>
      <p>{costForTwoMessage}</p>
      <p>{cuisines.join(" , ")}</p>
      <h2>Our Recomendations!!</h2>
      <ol>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} -{"   Rs."}
            {item?.card?.info?.price / 100}
          </li>
        ))}
      </ol>
    </>
  );
};

export default RestraMenu;
