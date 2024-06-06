import React from "react";
import "./headerNasabah.css";
import { KekiriSvg } from "../../icons";
import { Link } from "react-router-dom";

const HeaderNasabah = () => {
  return (
    <nav className="headerNasabah">
      <Link to={"/"} className="headerNasabahLink">
        <KekiriSvg />
        <p>Performa</p>
      </Link>
    </nav>
  );
};

export default HeaderNasabah;
