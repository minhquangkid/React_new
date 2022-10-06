import classes from "./Popup.module.css";
import { popupActions } from "../../store/PopupStore";
import { useSelector, useDispatch } from "react-redux";
// dispatch + tên actions (popupActions) là gửi đi , còn use Selector thì lấy về sài

const Popup = () => {
  const dispatch = useDispatch();
  // useDispatch là hàm gửi đi hành động trong redux

  const detail = useSelector((state) => state.popup.content);

  const closeHandler = () => {
    dispatch(popupActions.hide_popup());
  };

  return (
    <div className={classes.frame}>
      <button className={classes.btn} onClick={closeHandler}>
        &times;
      </button>
      <div>
        <img src={detail.img1} alt={detail.name} />
      </div>
      <div>
        <h3>{detail.name}</h3>
        <h4>{detail.price}</h4>
        <p>{detail.long_desc}</p>
      </div>
    </div>
  );
};

export default Popup;
