import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Main = ({handleGetData}) => {
  return (
    <div>
      <Header handleGetData={handleGetData}></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
