import classes from "./middle.module.css";
import useData from "../data/data";
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { listShopActions } from "../store/ListShopStore";
import { tinhtoan } from "../data/data";
import ImgGroup from "../data/imgGroup";
import { useHistory } from "react-router-dom";

const Middle = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  // state data này chỉ là bước trung gian để lọc dữ liệu và gán vào listDetail
  let listDetail = useSelector((state) => state.listShop.content);
  // listDetail mới là thằng hiển thị giao diện

  const getData = (e) => {
    setData(e);
    // gán vô state data , 2 hành đông setData và dispatch ko xảy ra liền theo thứ tự nên ta phải truyền vào dispatch là e chứ ko phải data

    dispatch(listShopActions.show_list(e));
    // ban đầu sau khi load trang và có được dữ liệu thì truyền trực tiếp dispatch cho nó hiển hết danh sách, ko phải thông qua state data
  };

  // useEffect(() => {
  //   console.log("useEffect run");
  //   dispatch(listShopActions.show_list(data));
  // }, [getData]);

  // không thể dùng để dispatch khi getData thay đổi lần đầu khi tải trang, vì trong những lần sau khi stata data thay đổi thì component render lại và làm cho useData(getData) chạy lại dẫn đến useEffect cũng chạy lại
  //cũng ko thể dùng useCallback vì nó cũng tương tự useEffect, và cũng ko thể lồng các hook vào nhau như useEffect chứ useData hoặc useCallback

  useData(getData);

  const getId = (e) => {
    const chosen = e.target.id;
    // console.log(chosen);
    history.push(`/detail/${chosen}`);
  };

  const getTitle = (e) => {
    //   console.log(e.target);
    console.log(e.target.textContent);
    let title = e.target.textContent.toLowerCase();
    // đổi về chữ thường hết

    if (title === "all") {
      dispatch(listShopActions.show_list(data));
      return;
    }
    let array = data.filter((items) => items.category === title);
    if (array.length !== 0) {
      dispatch(listShopActions.show_list(array));
    } else {
      dispatch(listShopActions.show_list([]));
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.left} onClick={getTitle}>
        <h2>CATEGORIES</h2>
        <h4 style={{ backgroundColor: "black", color: "white" }}>APPLE</h4>
        <p>All</p>
        <h4>IPHONE & MAC</h4>
        <p>IPhone</p>
        <p>Ipad</p>
        <p>Macbook</p>
        <h4>WIRELESS</h4>
        <p>Airpod</p>
        <p>watch</p>
        <h4>OTHER</h4>
        <p>Mouse</p>
        <p>Keyboard</p>
        <p>Other</p>
      </div>
      <div className={classes.right}>
        <div className={classes.rightCol}>
          {listDetail.map((e) => {
            return (
              <div key={e._id.$oid} className={classes.box} onClick={getId}>
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
      </div>
    </div>
  );
};
// phải cố định 2 cột left 25% và right 75% trong 1 div flex trước, sau đó trong cột right mới tạo 1 div rightCol có display : flex riêng và lồng các div con vào
// chứ không được gắn cho cột right thuộc tính display : flex luôn vì như vậy nó sẽ tự tăng vượt quá 75%
export default Middle;
