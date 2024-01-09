import { useContext } from "react";
import { IMG_CDN_LINK } from "../../utils/constants";
import UserContext from "../../utils/userContext";
export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
}) => {
  const {user} = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-1 shadow-lg bg-pink-50">
      <img src={IMG_CDN_LINK + cloudinaryImageId} alt="card-image" />
      <h2 className="font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{user.name} - {user.email}</h3>
    </div>
  );
};
