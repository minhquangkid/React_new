import React, { useState } from "react";
import classes from "./banner.module.css";
import useData from "../data/data";

const Banner = () => {
  const [link, setLink] = useState({});
  const { data } = useData(
    "https://api.themoviedb.org/3/discover/tv?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&with_network=123",
    bannerHandle
  );
  // ta phải truyền hàm xử lý vào custom hook vì hàm xử lý phải chạy trong luồng bất đồng bộ, do nó phải đợi lấy được kết quả bất đồng bộ thì mới chạy được
  console.log(data);

  function bannerHandle(e) {
    let random = Math.floor(Math.random() * e.results.length - 1); // chạy random chọn 1 bộ phim
    let pic = e.results[random].backdrop_path;
    let title = e.results[random].name;
    let overview = e.results[random].overview;
    console.log(pic);
    setLink({
      pic: `https://image.tmdb.org/t/p/original/${pic}`,
      title,
      overview,
    });
    // "https://image.tmdb.org/t/p/w500/Aa9TLpNpBMyRkD8sPJ7ACKLjt0l.jpg"

    /*  ta dùng đường dẫn https://image.tmdb.org/t/p/ và kết hợp thêm các kích thước tiêu chuẩn sau :
  these are the the sizes that I know: "w92", "w154", "w185", "w342", "w500", "w780", or "original"; and I think there isn't any other sizes "original" will give you a very large poster, if you're on mobile "w185" is the best choice
  - Nếu muốn hình rõ thì dùng original
  - Để chỉnh kích thước của hình ta chỉnh width, height trong thẻ img
  */
    // console.log(link);
  }
  return (
    <div className={classes.back}>
      <img
        src={link.pic}
        alt="khong thay"
        width="100%"
        height="800px"
        className={classes.image}
      />
      <div className={classes.content}>
        <h1 className={classes.title}>{link.title}</h1>
        <button
          className={classes.button}
          onClick={() => {
            console.log("hi all");
          }}
        >
          Play
        </button>
        <button className={classes.button}>My List</button>
        <div className={classes.custom}>
          <p className={classes.text}>{link.overview}</p>
        </div>
      </div>
    </div>
  );
};
// phải chỉnh css position : absolute cho tag <img> để có thể nhấn các button được
export default Banner;
