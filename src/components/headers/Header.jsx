import React from "react";
import "./navHeader.css";
import { Link } from "react-router-dom";
import { KekananSvg, KekiriSvg } from "../../assets/icons";

const Header = (props) => {
  const { iBack, iBackPath, iGo, iGoPath, title } = props;
  return (
    <nav className="navHeader">
      <div>
        {iBack && iBackPath ? (
          <Link to={iBackPath}>
            <KekiriSvg />
          </Link>
        ) : (
          iBack && <KekiriSvg />
        )}
      </div>

      <div className="headerTitle">{title}</div>
      <div>
        {iGo && iGoPath ? (
          <Link to={iGoPath}>
            <KekananSvg />
          </Link>
        ) : (
          iGo && <KekananSvg />
        )}
      </div>
    </nav>
  );
};

export default Header;
