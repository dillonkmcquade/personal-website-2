import React from "react";
import "./project-card.styles.scss";

const ProjectCard = ({ projectData }) => {
  return (
    <div className='project-card'>
      <div className="project-image">
        <img src={projectData.image} alt={projectData.alt} />
        <div className="project-buttons">
          <a href={projectData.source}>Source</a>

          <a href={projectData.demo}>Demo</a>
        </div>
      </div>

      <div className="project-details">
        <h2 className="project-name">{projectData.name}</h2>
        <div className="project-description">{projectData.description}</div>
      </div>
    </div>
  );
};
export default ProjectCard;
