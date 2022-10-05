import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import "./Header.css";

const Header = ({handleGetData}) => {
  return (
    <div className="container">
      <nav className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/meals">Meals</NavLink>
        <NavLink to={`/about`}>About</NavLink>
      </nav>
      <Search handleGetData={handleGetData}></Search>
      {/* Others content here */}
    </div>
  );
};

export default Header;
