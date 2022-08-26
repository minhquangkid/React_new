import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table food" />
      </div>
    </Fragment>
  );
};
// vì main-image có gạch nối nên phải dùng []

// trong component thì chẳng có event onClick nào cả mà event chỉ có trong các tag html, HeaderCartButton ta chỉ tự đặt tên thuộc tính nó là onClick mà thôi, thuộc tính này được kích hoạt khi tag html <button> trong HeaderCartbutton được kích hoạt thông qua event onClick
export default Header;
