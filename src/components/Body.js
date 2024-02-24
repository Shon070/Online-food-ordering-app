import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { API } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchtxt, setSearchtxt] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API);
    const json = await data.json();
    console.log(json);

    setListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="m-8 p-5">
        <input
          type="input"
          className="border border-solid border-black rounded-sm p-2 m-2 bg-inherit"
          value={searchtxt}
          onChange={(e) => setSearchtxt(e.target.value)}
        />
        <button
          className=" font-bold px-5 py-2 m-5 bg bg-green-100 rounded-sm"
          onClick={() => {
            const filterList = listOfRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchtxt.toLowerCase())
            );
            setFilteredRestaurant(filterList);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap p-24 m-auto items-center justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="rCard"
          >
            <Card resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
