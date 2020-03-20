import React from "react";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div>
      <div className="homepage bg-1">
        <div className="bg-1" />
        <div className="profile fadeInLeft animated-2">
          Hi my name's Dillon. <br />
          <br />
          <span style={{fontSize: '16px'}}>I'm a software developer in the Montréal, QC area.</span>
        </div>
        <img
          src="https://i.postimg.cc/rssfWssk/resized-img.jpg"
          alt="dillon"
          className="fadeInLeft animated-1"
        />
      </div>
      <div className="homepage-2 bg-2">
        <img
          src="https://i.postimg.cc/FHnN5wGx/Macbook-Pro.jpg"
          alt="dillon"
          className="fadeInLeft animated-1"
        />
        <div className="profile-2 fadeInLeft animated-2">
          I build things with JavaScript <span style={{fontSize: '16px'}}>and love tinkering with computer
          software and linux.</span> <br />
        </div>
      </div>
      <div className="homepage bg-1">
        <div className="profile fadeInLeft animated-2">
          I'm also an adventurer <br /> <br />
          <span style={{fontSize: '16px'}}>I used to be a mountain caretaker and I love traveling</span> <br />
          
        </div>
        <img
          src="https://i.postimg.cc/kGRGH807/caretaker2.jpg"
          alt="dillon"
          className="fadeInLeft animated-1"
        />
      </div>
    </div>
  );
};
export default HomePage;
