import React, { useState, useEffect } from "react";
import useData from "../../data/data";
import classes from "./Search.module.css";

const ResultList = (props) => {
  const [movie, setMovie] = useState([]);

  // console.log(props.passValue);
  useData(
    `https://api.themoviedb.org/3/search/movie?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&language=en-US&query=${props.passValue}&include_adult=false`,
    searchHandle,
    props.passValue
  );
  // trong useData có dùng useEffect, vì ở trang chủ ta chỉ cần hiện thị API cho sẵn nên ko cần cập nhật, do đó không truyền vào dependence cho useEffect, nhưng ở trang search này do người dùng thay đổi thông tin nhập vào nên ta cần phải chạy lại useEffect nên mới truyền thêm tham số thứ 3 dependence vào

  function searchHandle(e) {
    setMovie(e.results);
    // console.log(movie);
  }

  function clickHandle(e) {
    // console.log(e.target.id);

    const tam = movie.filter((item) => {
      // console.log(item.id);
      // console.log(+e.target.id);
      return item.id === +e.target.id;
    });

    // ở đây ta chỉ cần lấy thông tin khi click vào 1 hình chứ ko cần render hay cập nhật UI sau khi click, nên ta chỉ dùng 1 biến let thông thường là được, ko nên dùng state thay cho biến vì state ko cập nhật liền nên nó gây ra độ trễ chương trình

    props.getDetail(tam[0]);
  }

  const list = movie.map((item) => {
    // console.log(arr);
    return (
      <img
        key={item.id}
        id={item.id}
        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        alt="none"
        width="200px"
        height="auto"
        className={classes.poster}
        onClick={clickHandle}
      />
    );
  });

  return <div className={classes.frame}>{list}</div>;
};

export default ResultList;
