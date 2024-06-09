import React from "react";
import "./bottomTab.css";
import { NavLink } from "react-router-dom";
import { AkunSvg, DropSvg, NasabahSvg } from "../../assets/icons";

const BottomTab = () => {
  return (
    <div className="bottomTab">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
      >
        <NasabahSvg />
        <p>Nasabah</p>
      </NavLink>
      <NavLink
        to={"/drop"}
        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
      >
        <DropSvg />
        <p>Drop</p>
      </NavLink>
      <NavLink
        to={"/akun"}
        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
      >
        <AkunSvg />
        <p>Akun</p>
      </NavLink>
    </div>
  );
};

export default BottomTab;
