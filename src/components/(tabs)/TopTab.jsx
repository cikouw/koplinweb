import React from "react";
import "./topTab.css";
import { Link } from "react-router-dom";

const TopTab = ({ totalAnggota, totalAngsuran }) => {
  return (
    <nav className="topTab">
      <span>
        Total <strong>{totalAnggota} Orang</strong>
      </span>
      <span>
        Target
        <strong>
          {totalAngsuran.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </strong>
      </span>
      <Link to="/performa" className="topTabLink">
        <p>Performa</p>
      </Link>
    </nav>
  );
};

export default TopTab;
