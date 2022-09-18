import React, { useState, useEffect, useRef } from "react";
import classes from "./movieList.module.css";
import useData from "../data/data";

const MovieList = (props) => {
  const [arr, setArr] = useState([]);
  // const getId = useRef();

  let isOriginal = props.type === "Original";

  useData(props.getLink, arrayHandle);

  function arrayHandle(e) {
    setArr(e.results);
  }
  // e trong arrayHandle chính là data của useData, lấy dữ liệu API kiếm được và gán cho state, sau đó state sẽ render lại trang để cập nhật, còn ban đầu state là mảng rỗng nên trang sẽ ko có gì

  function clickHandle(e) {
    // console.log(getId);
    // console.log(getId.current.id);
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(arr.filter((item) => item.id == e.target.id));
    // dùng so sánh == vì id trong dữ liệu JSON là string
    const [tam] = arr.filter((item) => item.id == e.target.id);
    props.click(tam);
  }

  function khung(e) {
    // console.log(e.target.parentElement.parentElement);
    // console.log(e.target.parentElement.parentElement.id);
    const loai = e.target.parentElement.parentElement.id;
    props.clickParent(loai);
  }
  //lấy ra id của khung chứa ảnh

  const list = arr.map((item) => {
    // console.log(arr);
    return (
      <img
        key={item.id}
        id={item.id}
        src={`https://image.tmdb.org/t/p/original/${
          isOriginal ? item.poster_path : item.backdrop_path
        }`}
        alt="none"
        width="250px"
        height="auto"
        className={classes.pic}
        onClick={clickHandle}
      />
    );
  });

  return (
    <div id={props.type} onClick={khung}>
      <h2 className={classes.tieude}>{props.type}</h2>
      <div className={classes.cover}>{list}</div>
    </div>
  );
};
export default MovieList;
