import React from "react";
import typeHotel from "../data/type.json";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./middle.module.css";
const MiddleCenter = () => {
  return (
    <div className="row">
      {typeHotel.map((item) => {
        return (
          <div className="col" key={item.name}>
            <div style={{ position: "relative" }}>
              <img className={styles.imgMin} alt={item.name} src={item.image} />
              <div className={styles.detailHotel}>
                <h4>{item.name}</h4>
                <p>{item.count}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
//
export default MiddleCenter;
