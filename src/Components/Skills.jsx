import React from "react";
import './Skills.css'

const Skills = () => {
  return (
    <section id="skills">
  <h2>My Skills</h2>

  <div className="skills-container">

    <div className="skill">
      <span>React</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: "90%" }}></div>
      </div>
    </div>

    <div className="skill">
      <span>Redux</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: "85%" }}></div>
      </div>
    </div>

    <div className="skill">
      <span>JavaScript</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: "88%" }}></div>
      </div>
    </div>

    <div className="skill">
      <span>HTML & CSS</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: "95%" }}></div>
      </div>
    </div>
    <div className="skill">
      <span>TypeScript</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: "80%" }}></div>
      </div>
    </div>
    <div className="skill">
      <span>Node.js</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: "50%" }}></div>
      </div>
    </div>
    <div className="skill">
      <span>Express.js</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: "90%" }}></div>
      </div>
    </div>
    <div className="skill">
      <span>MongoDB</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: "85%" }}></div>
      </div>
    </div>

  </div>
</section>
  );
};

export default Skills;