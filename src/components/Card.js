import { CDN_URL } from "../utils/constants";

const Card = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-cards">
      <img
        className="res-img"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>
        {avgRating} Stars * {deliveryTime}Minutes
      </h4>
      <h5>{costForTwo}</h5>
      <h5>{cuisines.join(", ")}</h5>
    </div>
  );
};

export default Card;
