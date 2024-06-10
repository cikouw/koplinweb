import React from "react";
import "./topTab.css";
import { Link } from "react-router-dom";

const TopTab = ({ totalAnggota, totalAngsuran }) => {
  return (
    <nav className="topTab">
      <span>
        Total<p>{totalAnggota} orang</p>
      </span>
      <span>
        Target
        <p>
          {totalAngsuran.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
      </span>
      <Link to="/performa" className="topTabLink">
        <span>Performa</span>
      </Link>
    </nav>
  );
};

export default TopTab;
