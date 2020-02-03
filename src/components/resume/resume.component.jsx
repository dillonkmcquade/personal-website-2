import React from "react";
import "./resume.styles.scss";

const Resume = () => {
  return (
    <div className="resume-page">
      <h1 className="resume-title">OBJECTIVE</h1>
      <p className="content">
        As a front-end web developer I bring value to your products by creating
        interactive, simple, modern, and performing applications using
        JavaScript and the tools that exist in its ecosystem.
      </p>
      <hr />
      <h1 className="resume-title">TECHNICAL PROJECTS</h1>
      <h3>
        <a href="https://ancient-earth-21308.herokuapp.com">
          Developer job search engine
        </a>
      </h3>
      <p className="content">
        &#8688; A job search site created for programmers, software engineers,
        or developers. Job data comes from the GitHub jobs API.
      </p>
      <p className="content">
        &#8688; Developed using React, Node, Express, SASS
      </p>
      {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/}
      <h3>
        <a href="https://green-mountain-gear.herokuapp.com">
          Green Mountain Gear
        </a>
      </h3>
      <p className="content">
        &#8688; Web e-commerce site with a modern look equipped with Stripe
        payment and Google firebase authentication
      </p>
      <p className="content">&#8688; Developed using React, Redux, SASS</p>
      {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/}
      <h3>
        <a href="https://foodifai.herokuapp.com">FoodifAI</a>
      </h3>
      <p className="content">
        &#8688; Web application that uses machine learning to determine food
        ingredients in photos
      </p>
      <p className="content">
        &#8688; Full stack development using Node, Express, React, PostgresQL,
        SASS
      </p>
      {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/}
      <h3>
        <a href="https://foodifai.herokuapp.com">Robofriends</a>
      </h3>
      <p className="content">
        &#8688; A playful, modern take on a contact list with responsive
        searchability
      </p>
      <p className="content">
        &#8688; Developed using React, Robohash API, and bootstrapped with
        Tachyons
      </p>
      <h1 className="resume-title">EDUCATION</h1>
      <p className="content">
        &#8688; B.Sc. Biology | Central Connecticut State University, USA
      </p>
      <h1 className="resume-title">TECHNICAL SKILLS</h1>
      <p className="content">
        &#8688; React, Redux, ES6, Express, PostgresQL, Node, Webpack, Babel,
        Git, GraphQL
      </p>
    </div>
  );
};
export default Resume;
