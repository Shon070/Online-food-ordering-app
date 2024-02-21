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
    // console.log(json);

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
      <div className="explore">
        <input
          type="input"
          className="input-field"
          value={searchtxt}
          onChange={(e) => setSearchtxt(e.target.value)}
        />
        <button
          className="searchBtn"
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

      <div className="res-container">
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
