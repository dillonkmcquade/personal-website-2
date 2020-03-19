import React from "react";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="profile fadeInLeft animated-2">
        Hi my name's Dillon. <br /><br />I'm a software developer in the Montréal, QC area. <br /> <br /> I like building things with JavaScript and tinkering with computer software and linux. I'm also a traveler, backpacker, fly-fisherman, and I love cooking. <br /> 
      </div>
      <img
        src="https://i.postimg.cc/rssfWssk/resized-img.jpg"
        alt="dillon"
        className="fadeInLeft animated-1"
      />
    </div>
  );
};
export default HomePage;
