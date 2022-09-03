import React, { useEffect, useState, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";
function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    //khi đang lấy dữ liệu API thì đặt trạng thái này là true

    try {
      const response = await fetch(
        "https://minhquang-92d8c-default-rtdb.firebaseio.com/movies.json"
      );

      // console.log(response);
      // trong này có hàm json, ở prototype

      // firebase sẽ tạo ra 1 Backend giả lập, giúp ta giao tiếp từ fontend đến backend và từ đó gửi được dữ liệu lên API (là database)
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      console.log(data);

      const loadMovies = [];

      for (const key in data) {
        loadMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      // kiểm tra thuộc tính ok, nếu nó bị lỗi 404 là ko lấy được dữ liệu thì ta tự tạo ra lỗi, và nó sẽ nhảy thẳng xuống phần catch để chạy
      // const transformedMovies = data.results.map((movieData) => {
      //   // console.log(data);

      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });

      setMovies(loadMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
    // khi lấy xong thì đặt trạng thái trở về false
  }, []);
  // vì ko có đối tượng ngoài nào làm cho fetchMoviesHandler thay đổi ngoại trừ chính bản thân nó (là nhà cung cấp update API) nên ta để trống phần dependences

  // response.json() dùng để chuyển đổi chuỗi json về dạng javascript có thể dùng được
  // trong object data có thuộc tính tên là results
  // ta tạo ra hàm transformedMovies để biến đổi các thuộc tính trong mảng API thành các tên cho phù hợp với MoviesList.js đã tạo
  // xem các console.log để hiểu

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  // ta phải để fetchMoviesHandler vào trong dependences vì nếu có tác động bên ngoài làm thay đổi dữ liệu API (như nhà cung cấp thay đổi update thông tin API) thì web của mình sẽ tự cập nhật lại nhờ có useEffect
  // nhưng nếu chỉ bổ sung vô dependece ko thôi thì khi app nó render lại thì sẽ tạo lại hàm fetchMoviesHandler do đó làm cho useEffect update liên tục gây nên vòng lặp vô hạn, vì vậy để khắc phục ta dùng useCallback

  async function AddMovieHandler(movie) {
    const response = await fetch(
      "https://minhquang-92d8c-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Context-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  // gửi dữ liệu nhập từ form lên Firebase
  // ko hiểu chỗ này, xem lại fetch

  let content = <p>Found no movies</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={AddMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
