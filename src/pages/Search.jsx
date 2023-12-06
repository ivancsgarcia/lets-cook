import React from "react";
import "../css/search.css";
import Navbot from "../components/Navbot";
import { Link } from "react-router-dom";

function Search() {
  return (
    <div className="search">
      <div className="header">
        <Link to={"/home"}>
          <img
            src="/images/svg/chevron-left.svg"
            alt=""
            className="search-left"
          />
        </Link>
        <h1>What are you looking for?</h1>
      </div>

      <input type="text" placeholder="Search" />

      <div className="popular-searches">
        <h2>Popular Searches</h2>
      </div>

      <div className="categories">
        <h2>Categories</h2>
      </div>

      <Navbot />
    </div>
  );
}

export default Search;
