import React from "react";
import "../home/home.css";
import Navbar from "../../navbar/navbar";
import Foot from "../../homePage/foot";
import Form from "../../homePage/form";
import detail from "../../data/detail.json";
import imgLocal from "./address-icon-png-2.jpg";
import "./mystyle.css";

const Detail = () => {
  return (
    <React.Fragment>
      <div className="back" style={{ height: "180px" }}></div>
      <div className="home">
        <Navbar />
      </div>
      <div className="home">
        <button className="nut bay">Reserve or Book Now !</button>
        <h1>{detail.name}</h1>

        {/* <img
            src="https://www.nicepng.com/png/detail/24-244464_store-location-icon-png-download-orange-address-icon.png"
            alt="location"
            width="50"
            height="50"
          ></img> */}
        <span>
          <img src={imgLocal} alt="location" width="15" height="20"></img>{" "}
          {detail.address}
        </span>
        <p>{detail.distance}</p>
        <p>{detail.price}</p>
        <div className="bocuc">
          {detail.photos.map((e, index) => {
            return <img className="anh" src={e} key={index} alt={index}></img>;
          })}
        </div>
        <div className="duoi">
          <div className="fly">
            <h5>Perfect for a 9-night stay!</h5>
            <p>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!{" "}
            </p>
            <p className="specialPrice">
              <span style={{ fontWeight: "700" }}>
                ${detail.nine_night_price}
              </span>
              {`(9 nights)`}
            </p>
            <button className="nut ">Reserve or Book Now !</button>
          </div>
          <h3>{detail.title}</h3>
          <p>{detail.description}</p>
        </div>
      </div>
      <Form />
      <div className="home">
        <Foot />
      </div>
    </React.Fragment>
  );
};
// ko thể lấy đường dẫn tương đối theo cách thông thường mà phải import nó xong mới dùng src={imgLocal}
// có thể dùng đường dẫn trực tiếp được, ngoài ra còn nhiều cách khác nên xem các tài liệu đã tải về
export default Detail;
