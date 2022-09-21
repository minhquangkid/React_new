import React, { useState } from "react";
import classes from "./Search.module.css";
import Navbar from "../../navbar/navbar";
import SearchForm from "./SearchForm";
import ResultList from "./resultList";
import MovieDetail from "../../body/movieDetail";

const Search = () => {
  // console.log("đã render search");

  const [request, setRequest] = useState("");
  const [response, setResponse] = useState({ id: 0, content: "", show: false });

  const getHandle = (e) => {
    // console.log(e);
    setRequest(e);
  };

  const responseHandle = (e) => {
    console.log(e);

    // phải so sánh bằng number chứ ko so sánh bằng object được, vì 2 object giống nhau hoài toàn nhưng khi so sánh == hay === đều ra false
    if (e.id !== response.id) {
      setResponse({
        id: e.id,
        content: e,
        show: true,
      });
    } else {
      setResponse({ id: 0, content: "", show: false });
    }
  };

  return (
    <React.Fragment>
      <div className={classes.umbrella}>
        <Navbar />
        <SearchForm getValue={getHandle} />
        <h2 className={classes.title}>Search Result</h2>
        {response.show && <MovieDetail getInf={response.content} />}
        <ResultList passValue={request} getDetail={responseHandle} />
      </div>
    </React.Fragment>
  );
};

// nên sử dụng useContext để trao đổi dữ liệu 2 component con
export default Search;
