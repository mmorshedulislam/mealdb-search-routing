import React, { useState } from "react";
import Examples from "../Examples/Examples";

const Search = () => {
  const [searchInput, setSearchInput] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  console.log(searchInput);

  return (
    <div>
      <div className="d-flex">
        <input
          id="search-meal"
          className="form-control"
          type="text"
          placeholder="Are You Hungry!"
          onChange={handleChange}
        />
        <button className="btn btn-info ms-2">Search</button>
      </div>
      <Examples handleChange={handleChange}></Examples>
    </div>
  );
};

export default Search;
