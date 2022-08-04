import Navbar from "../../navbar/navbar";
import Header from "../../header/header";
import MiddleTop from "../../body/middletop";
// không dùng  {} vì Middle là 1 component, hoặc là tên của 1 mảng trong file JSX hoắc JSON
// dùng {} khi nó là 1 giá trị không phải là component
import "./home.css"; // import trực tiếp mà ko cần tên khi nó là css
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <div className="back"></div>
      <div className="home">
        <Navbar />
        <Header />
        <div className="container-flex">
          <MiddleTop />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
