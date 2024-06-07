import React from "react";
import "./topTab.css";
import { Link } from "react-router-dom";

const TopTab = () => {
  return (
    <nav className="topTab">
      <p>
        Total <strong>240</strong>
      </p>
      <p>
        Target <strong>2,4 juta</strong>
      </p>
      <Link to="/performa" className="topTabLink">
        <p>Performa</p>
      </Link>
    </nav>
  );
};

export default TopTab;
