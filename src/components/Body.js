import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import { RestaurantCard } from "./RestaurantCard";

function filterData(input, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(input)
  );
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurantData] = useState(restaurantList);
  useEffect(() => {
    getRestaurants();
  },[]);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0136879&lng=73.02318629999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurantData(json?.data?.cards[2]?.data?.data?.cards)
  }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchInput}
          onChange={(e) => {
            // e.target.value => whatever you write in input
            setSearchInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(searchInput, restaurants);
            setRestaurantData(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
