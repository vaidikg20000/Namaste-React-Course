import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(input, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(input.toLowerCase())
  );
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurantData] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0136879&lng=73.02318629999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
  }
  // Not render component (early return)
  if (!allRestaurants) return null;

  if (filteredRestaurants.length === 0)
    return <h1>No Matching restaurants found</h1>;

  return allRestaurants?.length === 0 ? (
    <>
      <Shimmer />
    </>
  ) : (
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
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurantData(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
