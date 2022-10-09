import { Fragment } from "react";
import { tinhtoan } from "./data";

const ImgGroup = (props) => {
  return (
    <Fragment>
      <img src={props.img1} alt={props.name} id={props.id} />
      <h4>{props.name}</h4>
      <p>{`${tinhtoan(props.price)} VNĐ`}</p>
    </Fragment>
  );
};
export default ImgGroup;
