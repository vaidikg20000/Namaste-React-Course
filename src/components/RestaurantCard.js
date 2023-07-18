import { IMG_CDN_LINK } from "../constants";
export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_LINK + cloudinaryImageId} alt="card-image" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} stars</h3>
    </div>
  );
};
