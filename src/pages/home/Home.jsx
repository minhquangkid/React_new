import Navbar from "../../navbar/navbar";
import Header from "../../header/header";
import MiddleTop from "../../homePage/middletop";
import MiddleCenter from "../../homePage/middlecenter";
import MiddleBottom from "../../homePage/middlebottom";
import Form from "../../homePage/form";
import Foot from "../../homePage/foot";
// không dùng  {} vì Middle là 1 component, hoặc là tên của 1 mảng trong file JSX hoắc JSON
// dùng {} khi nó là 1 giá trị không phải là component
import "./home.css"; // import trực tiếp mà ko cần tên khi nó là css
// import "bootstrap/dist/css/bootstrap.min.css";
// bằng một cách nào đó, có thể là do npm install bootstrap mà ta đã cài bootstrap vào trong global của toàn dự án nên ko cần import nó
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
          <h3 className="part2">Browse by property type</h3>
          <MiddleCenter />
          <h3 className="part2">Homes guests love</h3>
          <MiddleBottom />
        </div>
      </div>
      <Form />
      <div className="home">
        <Foot />
      </div>
    </React.Fragment>
  );
};
// mặc dù sử dụng lineHeight: "200px" nhưng không thể đưa chữ vô chính giữa khung được vì nó bị dính định dạng bootstrap(mở f12 và xem bên cột css sẽ thấy), nên ta phải dùng absolute
// sử dụng css cơ bản để làm cho bề rộng nội dung còn 70% và căn lề nó vô giữa, phần bên trong sử dụng bootstrap để chia cột cho các hình, dùng class .col thì nó tự động chia đều các cột
export default Home;
