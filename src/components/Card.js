import { CDN_URL } from "../utils/constants";

const Card = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="m-6 p-5 w-80 h-full items-center justify-center">
      <img
        className=" w-64 h-40 border border-solid border-transparent rounded-xl items-center"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="text-center py-1 font-semibold">
        <h3>{name}</h3>
        <h4>
          {avgRating} Stars * {deliveryTime}Minutes
        </h4>
        <h5>{costForTwo}</h5>
        <h5>{cuisines.join(", ")}</h5>
      </div>
    </div>
  );
};

export default Card;
