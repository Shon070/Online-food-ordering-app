import { CDN_URL } from "../utils/constants";

const Card = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="m-6 p-5 w-80 h-96 flex flex-col items-center justify-center bg-gray-200 shadow-2xl rounded-md transform transition-transform hover:scale-105">
      <div className="flex items-center justify-center w-full h-40">
        <img
          className="object-cover w-64 h-40 rounded-xl"
          alt="res-img"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="text-center py-2 font-semibold">
        <h3>{name}</h3>
        <h4>
          {avgRating}⭐| {deliveryTime} Minutes🛵
        </h4>
        <h5>{costForTwo}</h5>
        <h5>{cuisines.join(", ")}</h5>
      </div>
    </div>
  );
};

export default Card;
