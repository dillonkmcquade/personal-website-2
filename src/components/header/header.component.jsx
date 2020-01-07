import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <span className="d">D</span>
      </div>
      <div className="options">
        <Link to="/" className="option">
          About
        </Link>
        <Link to="/resume" className="option">
          Resume
        </Link>
        <Link to="/portfolio" className="option">
          Portfolio
        </Link>
      </div>
    </div>
  );
};
export default Header;
