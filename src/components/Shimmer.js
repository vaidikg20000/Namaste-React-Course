import React from "react";
import { restaurantList } from "../constants";
restaurantList;

const Shimmer = () => {
  return (
    <>
      <div className="restaurant-list">
        {Array(10).fill("").map((x,index) => {
          return (
            <div key={index} className="shimmer-card"></div>
          );
        })}
      </div>
    </>
  );
};

export default Shimmer;
