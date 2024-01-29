import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {
  const { resId } = useParams();

  const resMenu = useResMenu(resId);

  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, avgRating, locality, costForTwoMessage } =
    resMenu?.cards[0]?.card?.card?.info;

  const { deliveryTime } = resMenu?.cards[0]?.card?.card?.info.sla;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines.join(", ")}- {costForTwoMessage}
      </h2>
      <h4>{avgRating} Stars</h4>
      <h4>{locality}</h4>
      <h4>{deliveryTime} Minutes</h4>
      <ul>
        {itemCards.map((item) => (
          <h5 key={item.card.info.id}>
            {item.card.info.name}- ₹{item.card.info.price / 100}
          </h5>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
