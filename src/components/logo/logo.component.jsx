import React from "react";
import "./logo.styles.scss";

const Logo = () => {
  return (
    <div className="logo">
      <div>
        <a href="https://www.dmcquade.dev" className="name">
          <div>
            <span className="logo2">D</span>illon K.{" "}
            <span className="logo2">m</span>cQuade
          </div>
          
          <span className="subtitle">Front end Developer</span>
        </a>
      </div>
    </div>
  );
};
export default Logo;
