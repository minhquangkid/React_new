import React from "react";
import ds from "../../data/search.json";
import SearchListItem from "./searchListItem";
import "./search.css";

const SearchList = () => {
  return (
    <div>
      {ds.map((e) => {
        return <SearchListItem key={e.name} item={e} />;
      })}
    </div>
  );
};

export default SearchList;
