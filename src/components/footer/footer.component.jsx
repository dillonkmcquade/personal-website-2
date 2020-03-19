import React from "react";
import "./footer.styles.scss";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

const Footer = () => {
  return (
    <div className="footer">
      
      <div className="media-icons">
        <div className="icon git">
          <a href="https://www.github.com/dillonkmcquade">
            <GitHubIcon fontSize='large' htmlColor='black'/>
          </a>
        </div>
        <div className="icon linkedin">
          <a href="https://www.linkedin.com/in/dillon-mcquade-1576a2198">
            <LinkedInIcon fontSize='large' htmlColor='black' />
          </a>
        </div>
        <div className="icon mail">
          <a href="mailto:dillonkmcquade@gmail.com">
            <MailIcon fontSize='large' htmlColor='black'/>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
