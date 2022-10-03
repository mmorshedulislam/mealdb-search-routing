import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <nav className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/meals">Meals</NavLink>
        <NavLink to={`/about`}>About</NavLink>
      </nav>
      {/* Others content here */}
    </div>
  );
};

export default Header;
