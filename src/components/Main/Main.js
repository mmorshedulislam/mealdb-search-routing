import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Search from "../Search/Search";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
