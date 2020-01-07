import React from "react";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-name">
        <div className="">
          <span className="logo2">D</span>illon K.{" "}
          <span className="logo2">m</span>cQuade
        </div>
      </div>
      <h3>Software Developer</h3>

      <div className="homepage-btn">
        <a href="https://google.com" className="contact-btn">
          get in touch
        </a>
      </div>
    </div>
  );
};
export default HomePage;
