import React, { useEffect, useState, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";
 import { addDoc, collection,getDoc } from "firebase/firestore";
import { firestore } from "./firebaseConnect";

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let database;

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {

      database = collection(firestore,"movies")


    console.log(database);

    const snapshot = await getDoc(database); // post thì được nhưng get chưa được
    console.log(snapshot);
    const loadedMovies = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setMovies(loadedMovies);

    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
    // khi lấy xong thì đặt trạng thái trở về false
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  

  async function AddMovieHandler(movie) {
    addDoc(database,movie)
    console.log(movie);

  }


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
