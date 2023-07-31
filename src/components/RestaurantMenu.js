import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMG_CDN_LINK } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  useEffect(() => {
    getRestaurantData();
  }, []);
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams();
  // console.log(params);
  async function getRestaurantData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0136879&lng=73.02318629999999&restaurantId="+ id
    );
    const json = await data.json();
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
  }
  return !restaurant ? <Shimmer /> : (
    <div>
      <h2>Restaurant id: {restaurant.id}</h2>
      <h2>{restaurant.name}</h2>
      <img src={IMG_CDN_LINK + restaurant.cloudinaryImageId} />
      <h2>Menu</h2>
      {/* <ul>
        {Object.values(restaurant?.menu?.items).map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
