import { IMG_CDN_LINK } from "../../utils/constants";
export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
}) => {
  return (
    <div className="w-56 p-2 m-1 shadow-lg bg-pink-50">
      <img src={IMG_CDN_LINK + cloudinaryImageId} alt="card-image" />
      <h2 className="font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} stars</h3>
    </div>
  );
};
