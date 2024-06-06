import React from "react";
import "./bottomTabs.css";
import { NavLink } from "react-router-dom";
import { AkunSvg, NasabahSvg } from "../../icons";

const BottomTabs = () => {
  return (
    <div className="bottomTabs">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
      >
        <NasabahSvg />
      </NavLink>
      <NavLink
        to={"/akun"}
        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
      >
        <AkunSvg />
      </NavLink>
    </div>
  );
};

export default BottomTabs;
