import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMG_CDN_LINK } from "../../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../../utils/useRestaurant";

const RestaurantMenu = () => {
  const {id}  = useParams();
  const restaurant = useRestaurant(id);

  return !restaurant ? <Shimmer /> : (
    <div>
      <h2>Restaurant id: {restaurant.id}</h2>
      <h2>{restaurant.name}</h2>
      <img src={IMG_CDN_LINK + restaurant.cloudinaryImageId} alt="restaurant-image" />
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
