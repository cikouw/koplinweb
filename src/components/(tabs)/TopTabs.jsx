import React from "react";
import "./topTabs.css";
import { Link, useLocation } from "react-router-dom";
import { KekananSvg } from "../../icons";

const TopTabs = () => {
  const location = useLocation();
  const isActive = location.pathname === "/performa";
  return (
    <nav className="topTabs">
      <p>
        Nasabah <strong>240</strong>
      </p>
      <p>
        Target <strong>2,4 juta</strong>
      </p>
      <Link to="/performa" className={`link ${isActive ? "active" : ""}`}>
        <p>Performa</p>
        <KekananSvg />
      </Link>
    </nav>
  );
};

export default TopTabs;
