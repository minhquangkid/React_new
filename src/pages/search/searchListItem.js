import React from "react";
import "./search.css";
const SearchListItem = (props) => {
  return (
    <div className="container-flex">
      <div className="row khung">
        <div className="col-4">
          <img className="hinh" src={props.item.image_url}></img>
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
                <p>{props.item.free_cancel}</p>
              </div>
              <div className="col-4">hi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;
