import React from "react";
import footer from "../data/footer.json";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./foot.module.css";
const Foot = () => {
  const list = footer.map((item) => {
    return (
      <div className="col" key={item.col_number}>
        <ul>
          {item.col_values.map((e) => {
            return (
              <li className={styles.lili} key={e}>
                {e}
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
  return (
    <div className="container-flex">
      <div className="row">{list}</div>
    </div>
  );
};
export default Foot;
