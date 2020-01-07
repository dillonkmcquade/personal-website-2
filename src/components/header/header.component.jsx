import React from "react";
import { Link } from "react-router-dom";
import Logo from '../logo/logo.component';
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="options">
        <Link to="/" className="option">
          About
        </Link>
        <Link to="/resume" className="option">
          Résumé
        </Link>
        <Link to="/portfolio" className="option">
          Portfolio
        </Link>
      </div>
    </div>
  );
};
export default Header;
