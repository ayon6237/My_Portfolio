import React from "react";
import './Projects.css'

const Projects = () => {
  return (
    <section id="projects">
  <h2>My Projects</h2>

  <div className="projects-container">

    <div className="project-card">
      <h3>CRUD application using React & React-Redux</h3>
      <p>React + Redux based CRUD app</p>
      <div className="project-links">
        <a target="_blank" rel="noopener noreferrer" href="https://ayon6237.github.io/CRUD_app_react_reduxToolkit/">Live</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ayon6237/CRUD_app_react_reduxToolkit">GitHub</a>
      </div>
    </div>
    <div className="project-card">
      <h3>CRUD application using React & React-Redux</h3>
      <p>React + Redux based CRUD app</p>
      <div className="project-links">
        <a target="_blank" rel="noopener noreferrer" href="https://ayon6237.github.io/CRUD_app_react_reduxToolkit/">Live</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ayon6237/CRUD_app_react_reduxToolkit">GitHub</a>
      </div>
    </div>
 

  </div>
</section>
  );
};

export default Projects;