import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const ResMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(json);
    setResMenu(json.data);
  };

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
