import { useEffect, useState } from "react";
import classes from "./buttonQuality.module.css";

const ButtonQuality = (props) => {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    props.num(number);
  }, [number]);
  // phải dùng useEffect để truyền giá trị ra ngoài nút khi state được thay đổi hoàn toàn, vì nếu truyền trực tiếp number ngay sau khi vừa setNumber thì nó sẽ ko cập nhật state liền lập tức, dẫn đến chậm trễ

  const minus = () => {
    if (number > 1) {
      setNumber((prev) => prev - 1);
    }
  };
  const plus = () => {
    setNumber((prev) => prev + 1);
  };

  return (
    <div className={classes.wrapper}>
      <span onClick={minus}>-</span>
      <span className={classes.num}>{number}</span>
      <span onClick={plus}>+</span>
    </div>
  );
};

export default ButtonQuality;
