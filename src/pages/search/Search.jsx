import React from "react";
import "../home/home.css";
import Navbar from "../../navbar/navbar";
import SearchPopup from "./searchPopup";
import SearchList from "./searchList";

const Search = () => {
  return (
    <React.Fragment>
      <div className="back" style={{ height: "180px" }}></div>
      <div className="home">
        <Navbar />

        <div className="container-flex">
          <div className="row">
            <div className="col-4">
              <SearchPopup />
            </div>
            <div className="col-8">
              <SearchList />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
