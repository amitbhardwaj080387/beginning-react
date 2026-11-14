import Card from "./Card";
import { resList } from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  // Local state variable - superpowerful  variable
  const restaurents = useState(resList);
  console.log(restaurents);
  const [listOfRestaurents, setListOfRestaurents] = restaurents;
  // Normal javascript variable
  let listOfRestaurentsJS = [
    {
      name: "Punjabi Angithi",
      avgRating: 3.8,
      deliveryTime: "30-40 mins",
      location: "Ashok Vihar",
    },
    {
      name: "Jai veer chaap",
      avgRating: 4.5,
      deliveryTime: "50-85 mins",
      location: "M2K Rohini",
    },
    {
      name: "Dominos",
      avgRating: 4.9,
      deliveryTime: "50-85 mins",
      location: "M2K Rohini",
    },
  ];
  return (
    <div className="body">
      <div className="search-bar">
        <form>
          <input
            type="input"
            name="search-inp"
            placeholder="search food here"
          />
          <input type="submit" value="search" name="search" />
        </form>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurents.filter(
            (restaurent) => restaurent.avgRating > 4,
          );

          setListOfRestaurents(filteredList);
        }}
      >
        Top Rated Restaurents
      </button>
      <div className="card-container">
        {listOfRestaurents.map((restaurent, index) => (
          <Card resData={restaurent} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
