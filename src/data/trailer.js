import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

const Trailer = (props) => {
  const [status, setStatus] = useState(false);
  const [getVideo, setGetVideo] = useState(props.inf.backdrop_path);
  // nếu ban đầu chưa lấy được API thì đặt backdrop thế chỗ youtube

  useEffect(() => {
    const getTrailer = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${props.inf.id}/videos?api_key=3997fc9014661d7c2ce89c2bbea4b9f8`
      );

      if (!response.ok) {
        throw new Error("Something went wrong !");
      }
      const getData = await response.json();
      console.log(getData);

      // lọc lấy các mảng thỏa yêu cầu
      let arrayFilter = getData.results.filter((e) => {
        return e.site === "YouTube" && e.type === "Trailer";
      });

      // nếu ko có được e.type === "Trailer" thì ta lọc lại để tìm e.type ===  "Teaser"
      if (arrayFilter === []) {
        arrayFilter = getData.results.filter((e) => {
          return e.site === "YouTube" && e.type === "Teaser";
        });
      }

      if (arrayFilter === []) {
        setStatus(false);
      } else {
        setStatus(true);
      }

      setGetVideo(arrayFilter[0]);
      console.log(getVideo);
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

  return (
    <div>
      {status && (
        <YouTube>
          videoId = {"_uX6of3vBu0"}
          opts={opts}
        </YouTube>
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
