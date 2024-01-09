import { useState, useEffect, useContext } from "react";
import useOnline from "../../utils/useOnline";
import { restaurantList } from "../../utils/constants";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../../utils/userContext";

function filterData(input, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(input.toLowerCase())
  );
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurantData] = useState([]);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0136879&lng=73.02318629999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json, "llll");
    setAllRestaurantData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  // Not render component (early return)
  if (!allRestaurants) return null;

  const online = useOnline();

  if (!online) {
    return <h1>You are offline, check internet connection</h1>;
  }

  // if (filteredRestaurants.length === 0)
  //   return <h1>No Matching restaurants found</h1>;

  return allRestaurants?.length === 0 ? (
    <>
      <Shimmer />
    </>
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          placeholder="Search"
          className="focus:bg-slate-100 p-2"
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
          className="p-2 m-2 bg-purple-800 hover:bg-gray-700 text-white rounded"
        >
          Search
        </button>
        <input
          className=""
          value={user.name}
          onChange={(e) => {
            setUser({...user, name: e.target.value });
          }}
        />
        <input
          className=""
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard
                user={user}
                {...restaurant.info}
                key={restaurant.info.id}
              />{" "}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
