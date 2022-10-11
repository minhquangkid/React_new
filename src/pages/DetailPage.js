import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import ButtonQuality from "../data/buttonQuality";
import useData, { tinhtoan } from "../data/data";
import ImgGroup from "../data/imgGroup";
import classes from "./DetailPage.module.css";
import { useDispatch } from "react-redux";
import { listCartActions } from "../store/listCart";

const DetailPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [detail, setDetail] = useState({
    price: "",
    long_desc: "",
    category: "",
  });
  const [list, setList] = useState([]);
  const [amout, setAmout] = useState(1);
  const params = useParams();
  // dùng id trong params.id  vì trong App.js ta đặt <Route path="/detail/:id">

  useData(getData);

  function getData(arr) {
    const [pick] = arr.filter((item) => item._id.$oid === params.id);
    // console.log(pick);
    setDetail(pick);
    // lấy ra dữ liệu của đối tượng được chọn
    const relativeArray = arr.filter(
      (items) => items.category === pick.category
    );
    setList(relativeArray);
    // lấy ra họ hàng của đối tượng đó
    // vì biến pick sẽ có được kết quả trước state detail nên ta dùng pick để lấy dữ liệu cho state list
  }

  const getID = (e) => {
    // console.log(e.target.id);
    history.push(`/detail/${e.target.id}`);
    // đề bài ko yêu cầu chỗ này nhưng nó ko hoạt động
  };

  const getValue = (e) => {
    // console.log(e);
    setAmout(e);
  };

  const submitHandle = () => {
    const pack = { ...detail, amout };
    // console.log(pack);
    let getOld = JSON.parse(localStorage.getItem("cartList")) || [];
    // console.log(getOld);
    getOld.push(pack);
    // console.log(getOld);
    localStorage.setItem("cartList", JSON.stringify(getOld));
    dispatch(listCartActions.add_cart(getOld));
  };

  return (
    <Fragment>
      <div className={classes.frame}>
        <div>
          <img src={detail.img1} alt={detail.name} />
        </div>
        <div>
          <h2>{detail.name}</h2>
          <p>{tinhtoan(detail.price)}</p>
          <p>{detail.short_desc}</p>
          <h4>
            CATEGORY: <span>{detail.category}</span>
          </h4>
          <div className={classes.adjust}>
            <span>QUANTITY </span>
            <span>
              <ButtonQuality num={getValue} />
            </span>
            <span className={classes.btn} onClick={submitHandle}>
              Add to Cart
            </span>
          </div>
        </div>
      </div>
      <div className={classes.discription}>
        <div>
          <button className={classes.btn}>DESCRIPTION</button>
          <p className={classes.fix}>{detail.long_desc}</p>
        </div>
      </div>
      <h3 style={{ textAlign: "left" }}>RELATED PRODUCTS</h3>
      <div className={classes.bottom}>
        {list.map((e) => {
          return (
            <div key={e._id.$oid} onClick={getID}>
              <ImgGroup
                img1={e.img1}
                name={e.name}
                price={e.price}
                id={e._id.$oid}
              />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
/* chỉnh bên css để detail.long_desc xuống dòng khi gặp /n trong API
.fix {
  white-space: pre-wrap; 
}
*/
/*
trong css phải dùng dấu '>' để  áp dụng cho đối tượng con dưới nó 1 bậc chứ ko phải tất cả đối tượng con
.adjust > span
*/
export default DetailPage;
