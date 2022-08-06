import React from "react";

const Order = (props) => {
  return (
    <div className="row">
      <div className="col-8">
        <p>{props.item}</p>
      </div>
      <div className="col-4">
        <input
          type="text"
          placeholder={props.nothing}
          style={{ width: "100%" }}
        ></input>
      </div>
    </div>
  );
};

export default Order;
