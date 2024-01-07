import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "./constants";

const useRestaurant = (id) =>{
    useEffect(() => {
        getRestaurantData();
      }, []);
      const [restaurant, setRestaurant] = useState(null);
      async function getRestaurantData() {
        const data = await fetch(
          FETCH_MENU_URL + id
        );
        const json = await data.json();
        console.log(json.data?.cards[0]?.card?.card?.info);
        setRestaurant(json.data?.cards[0]?.card?.card?.info);
      }
      return restaurant;
}

export default useRestaurant;