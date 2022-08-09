import React from "react";
import "./search.css";
const SearchListItem = (props) => {
  const goTo = () => {
    window.location.replace("http://localhost:3000/detail");
  };

  const cancel = () => {
    return (
      <React.Fragment>
        <p>Free cancellation</p>
        <p>You can cancel later, so lock in this great price today!</p>
      </React.Fragment>
    );
  };
  return (
    <div className="container-flex">
      <div className="row khung">
        <div className="col-4">
          <img
            className="hinh"
            src={props.item.image_url}
            alt={props.item.name}
          ></img>
        </div>

        <div className="col-8">
          <div className="container-flex">
            <div className="row">
              <div className="col-8">
                <h4>{props.item.name}</h4>
                <p>{props.item.distance}</p>
                <p>{props.item.tag}</p>
                <h6>{props.item.description}</h6>
                <p>{props.item.type}</p>
                <div>{props.item.free_cancel && cancel()}</div>
              </div>
              <div className="col-4 box">
                <span className="rate_text">{props.item.rate_text}</span>
                <span className="rate">{props.item.rate}</span>
                <p className="price">{props.item.price}</p>
                <p className="inf">Includes taxes and fees</p>
                <button className="avail" onClick={goTo}>
                  See availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;
