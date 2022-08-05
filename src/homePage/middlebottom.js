import React from "react";
import list from "../data/hotel_list.json";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./middle.module.css";
const MiddleBottom = () => {
  return (
    <div className="row">
      {list.map((item) => {
        return (
          <div className="col" key={item.name}>
            <div style={{ position: "relative" }}>
              <img
                className={styles.imgFour}
                alt={item.name}
                src={item.image_url}
              />
              <div>
                <h5>{item.name}</h5>
                <p>{item.city}</p>
                <h5>{`Starting from ${item.price}`}</h5>
                <span className={styles.mark}>{item.rate}</span>
                <span style={{ marginLeft: "10px" }}>{item.type}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
//
export default MiddleBottom;
