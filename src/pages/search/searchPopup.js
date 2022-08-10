import React from "react";
import Order from "./order";
import "./search.css";

const SearchPopup = () => {
  const list = [
    { ten: "Min price per right", tam: "" },
    { ten: "Max price per night", tam: "" },
    { ten: "Adult", tam: "1" },
    { ten: "Children", tam: "0" },
    { ten: "Room", tam: "1" },
  ];

  return (
    <div className="outfit">
      <h4>Search</h4>
      <h6>Destination</h6>
      <input style={{ width: "100%" }}></input>
      <h6>Check-in Date</h6>
      <input
        placeholder="06/24/2022 to 06/24/2022"
        style={{ width: "100%" }}
      ></input>
      <h6>Options</h6>
      <div className="container-flex">
        {list.map((e) => {
          return <Order key={e.ten} item={e.ten} nothing={e.tam} />;
        })}
      </div>
      <button className="nut_search">Search</button>
    </div>
  );
};

export default SearchPopup;
