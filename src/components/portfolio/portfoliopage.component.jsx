import React from "react";
import "./portfoliopage.styles.scss";
import ProjectCard from "../project-card/project-card.component";
import { projectData } from "./project.data";

const PortfolioPage = () => {
  console.log(projectData);
  return (
    <div className="portfolio-page">
      <ProjectCard projectData={projectData[0]} />
      <ProjectCard projectData={projectData[1]} />
      <ProjectCard projectData={projectData[2]} />
    </div>
  );
};

export default PortfolioPage;
