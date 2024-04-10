import { useState } from "react";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";
import { ITEM_CATEGORY } from "../utils/constants";
import ResMenuShimmer from "./ResMenuShimmer";

const ResMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { resId } = useParams();
  const resMenu = useResMenu(resId);

  if (resMenu === null) return <ResMenuShimmer />;

  // Destructure properties with default values or handle null/undefined
  const { name, cuisines, avgRating, locality, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info ?? {};
  const deliveryTime = resMenu?.cards[2]?.card?.card?.info?.sla?.deliveryTime;

  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c?.card?.card?.["@type"] === ITEM_CATEGORY
    );

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg">
        {cuisines?.join(", ")}- {costForTwoMessage}
      </h2>
      <h3>{avgRating} ⭐</h3>
      <h3>{locality}</h3>
      <h3 className="mb-5">{deliveryTime} Minutes</h3>

      {categories.map((category, index) => (
        <ResCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default ResMenu;
