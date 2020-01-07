import React from "react";
import "./footer.styles.scss";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Gmail } from "../../assets/gmail.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="media-icons">
        <div className='icon'>
          <a href="https://www.github.com/dillonkmcquade">
            <Github />
          </a>
        </div>
        <div className='icon'>
        <a href="https://www.linkedin.com/in/dillon-mcquade-1576a2198">
            <Linkedin />
          </a>
        </div>
        <div className='icon'>
        <a href="mailto:dillonkmcquade@gmail.com">
            <Gmail />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
