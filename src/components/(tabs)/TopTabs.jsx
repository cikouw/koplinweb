import React from "react";
import "./topTabs.css";
import { Link } from "react-router-dom";

const TopTabs = () => {
  return (
    <nav className="topTabs">
      <p>
        Total <strong>240</strong>
      </p>
      <p>
        Target <strong>2,4 juta</strong>
      </p>
      <Link to="/performa" className="topTabsLink">
        <p>Performa</p>
      </Link>
    </nav>
  );
};

export default TopTabs;
