import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

const Trailer = (props) => {
  // console.log("đã render lại");
  const [status, setStatus] = useState(false);
  const [getVideo, setGetVideo] = useState(props.inf.backdrop_path);
  // nếu ban đầu chưa lấy được API thì đặt backdrop thế chỗ youtube
  // console.log("state ban đầu: ", getVideo);
  // console.log("props nhận được: ", props.inf.backdrop_path);
  // không hiểu sao nó lại render 2 lần lúc đầu ??
  useEffect(() => {
    // console.log("chạy fecth..............................");
    const getTrailer = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${props.inf.id}/videos?api_key=3997fc9014661d7c2ce89c2bbea4b9f8`
      );

      if (!response.ok) {
        throw new Error("Something went wrong !");
      }
      const getData = await response.json();
      // console.log(getData);

      // lọc lấy các mảng thỏa yêu cầu
      let arrayFilter = getData.results.filter((e) => {
        return e.site === "YouTube" && e.type === "Trailer";
      });

      // nếu ko có được e.type === "Trailer" thì ta lọc lại để tìm e.type ===  "Teaser"
      if (arrayFilter.length === 0) {
        arrayFilter = getData.results.filter((e) => {
          return e.site === "YouTube" && e.type === "Teaser";
        });
      }
      // tuyệt đối không dùng arrayFilter === [] mà phải dùng arrayFilter.length === 0 vì javascript so sánh phức tạp ko hiểu chỗ này ?
      // console.log("mang sau khi lọc: ", arrayFilter);

      if (arrayFilter.length === 0) {
        setGetVideo(props.inf.backdrop_path);
        setStatus(false);
        // khi component được gắn vào,nó tạo useState thì ta khởi tạo ban đầu cho nó 1 giá trị props.inf.backdrop_path, nhưng khi component được render lại do state thay đổi hoặc do props truyền vào componet thay đôi thì nó không chạy lại dòng khởi tạo useState(props.inf.backdrop_path). Nên state chỉ được cập nhật thông qua hàm set của nó. Chính vì vậy ta phải có lệnh setGetVideo(props.inf.backdrop_path) ở đây
      } else {
        setGetVideo(arrayFilter[0]);
        setStatus(true);
      }
      // có thể dùng hàm find thay thế cho filter sẽ nhanh hơn

      // console.log("video sau khi update: ", getVideo);
      // console.log("status sau khi updat: ", status);
      // console.log("endingggggggggggggggggggggggggggggg");
    };
    getTrailer().catch((error) => {
      console.log(error);
    });
  }, [props]);
  // phải cho useEffect cập nhật lại mỗi khi props truyền vào nó thay đổi (tức là khi người dùng nhấn vào 1 bộ phim khác trong dãy)
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <div>
      {status && (
        <YouTube videoId={getVideo.key} opts={opts} onReady={onReady} />
      )}
      {!status && (
        <img
          src={`https://image.tmdb.org/t/p/original/${getVideo}`}
          alt="none"
          width="100%"
          height="400px"
        />
      )}
    </div>
  );
};

export default Trailer;
