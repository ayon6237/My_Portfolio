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
      <h3>Notes App using react</h3>
      <p>Just use useState,useEffect,useReducer and useContext hooks</p>
      <div className="project-links">
        <a target="_blank" rel="noopener noreferrer" href="https://ayon6237.github.io/react-notes-app/">Live</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ayon6237/react-notes-app">GitHub</a>
      </div>
    </div>

    <div className="project-card">
      <h3>DEVCONF Website using just HTML5 and CSS</h3>
      <p>Just HTML5 ans CSS based web app</p>
      <div className="project-links">
        <a target="_blank" rel="noopener noreferrer" href="https://ayon6237.github.io/PH-assignment1-Repo/">Live</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ayon6237/PH-assignment1-Repo">GitHub</a>
      </div>
    </div>
    
 

  </div>
</section>
  );
};

export default Projects;
