import React from "react";
import { restaurantList } from "../constants";
restaurantList;

const Shimmer = () => {
  return (
    <>
      <h1>Shimmer Loading....</h1>
    </>
    // <>
    //   {restaurantList.map((x) => {
    //     return (
    //       <div className="restaurant-list">
    //         <div className="shimmer-card"></div>
    //       </div>
    //     );
    //   })}
    // </>
  );
};

export default Shimmer;
