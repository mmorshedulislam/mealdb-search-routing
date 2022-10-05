import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ handleGetData }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/meal/${searchInput}`);
    console.log('clicked');
  };

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
        <div onClick={handleNavigate}>
          <button
            onClick={() => handleGetData(searchInput)}
            className="btn btn-info ms-2"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
