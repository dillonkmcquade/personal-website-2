import React from "react";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div style={{textAlign: 'center'}} className='animated-2 fadeInLeft'>
        <div className="homepage-name">
          <div className="name">
            <span className="logo2">D</span>illon K.{" "}
            <span className="logo2">m</span>cQuade
          </div>
        </div>
        <h3>Front end web developer</h3>
      </div>
      <img src='https://i.postimg.cc/rssfWssk/resized-img.jpg' alt='dillon' className='fadeInLeft animated-1'/>
    </div>
  );
};
export default HomePage;
