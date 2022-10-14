import classes from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/LoginStatus";
import { useEffect } from "react";

// khi reload tải lại trang thì tất cả các biến trong redux đều sẽ bị reset về trạng thái ban đầu, nó chỉ ko đổi trong quá trình thao tác nhảy qua nhảy lại giữa các trang. Vì vậy phải dùng localStore của trình duyệt để duy trì đăng nhập khi tải lại trang

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((state) => state.login.isLogin);
  const inf = useSelector((state) => state.login.content);

  const getUser = localStorage.getItem("on_login");
  // console.log(getUser);

  useEffect(() => {
    if (getUser !== null) {
      dispatch(loginActions.on_login(JSON.parse(getUser)));
      // console.log(inf);
    }
  }, []);
  // phải sử dụng useEffect vì khi tải lại trang redux sẽ mất hết, nên khi lấy dữ liệu từ localStore về và cập nhật nó vô redux thì trang sẽ bị render lại, mà mỗi lần render thì lệnh dispatch(loginActions.on_login(JSON.parse(getUser))); lại được gửi nên lại gây ra render ko có điểm dừng

  const logoutHandle = () => {
    localStorage.removeItem("on_login");
    dispatch(loginActions.on_logout());
  };

  return (
    <div className={classes.frame}>
      <div className={classes.textLeft}>
        <span
          onClick={() => {
            history.push("/");
          }}
          className={classes.active}
        >
          Home
        </span>
        <span
          onClick={() => {
            history.push("/shop");
          }}
        >
          Shop
        </span>
      </div>

      <span className={classes.titile}>BOUTIQUE</span>

      <div className={classes.textRight}>
        {!isLogin && (
          <span
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </span>
        )}
        <span
          onClick={() => {
            history.push("/cart");
          }}
        >
          Cart
        </span>
        {isLogin && <span>({inf.name})</span>}
        {isLogin && <span onClick={logoutHandle}>[Logout]</span>}
      </div>
    </div>
  );
};

export default Navbar;
