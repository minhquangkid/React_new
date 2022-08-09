import React from "react";
import "../home/home.css";
import Navbar from "../../navbar/navbar";
import SearchPopup from "./searchPopup";
import SearchList from "./searchList";
import Foot from "../../homePage/foot";
import Form from "../../homePage/form";
const Search = () => {
  return (
    <React.Fragment>
      <div className="back" style={{ height: "180px" }}></div>
      <div className="home">
        <Navbar />

        <div className="container-flex">
          <div className="row">
            <div className="col-3">
              <SearchPopup />
            </div>
            <div className="col-9">
              <SearchList />
            </div>
          </div>
        </div>
      </div>
      <Form />
      <div className="home">
        <Foot />
      </div>
    </React.Fragment>
  );
};

export default Search;
