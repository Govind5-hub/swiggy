import React from "react";

const RestaurantCard = ({ resdata }) => {
  const { info } = resdata;
  const { name, cuisines, avgRating, cloudinaryImageId } = info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
