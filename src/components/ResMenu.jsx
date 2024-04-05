import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";

const ResMenu = () => {
  const [showIndex, setShowIndex] = useState();

  const { resId } = useParams();

  const resMenu = useResMenu(resId);

  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, avgRating, locality, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;

  const { deliveryTime } = resMenu?.cards[2]?.card?.card?.info.sla;

  // const { itemCards } =
  //   resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);  =>  data of veg/nonveg filter, carousal and whatnot

  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg">
        {cuisines.join(", ")}- {costForTwoMessage}
      </h2>
      <h3>{avgRating} ⭐</h3>
      <h3>{locality}</h3>
      <h3 className="mb-5">{deliveryTime} Minutes</h3>

      {categories.map((category, index) => (
        <ResCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default ResMenu;
