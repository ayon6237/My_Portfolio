
import React from "react";
import "./About.css";

const highlights = [
  {
    icon: "💻",
    title: "My Journey",
    description:
      "From learning programming fundamentals to building full-stack applications with React, Node.js, Express.js, MongoDB, and Next.js.",
  },
  {
    icon: "🚀",
    title: "What I Love Building",
    description:
      "Responsive websites, useful web applications, REST APIs, authentication systems, and solutions to real-world problems.",
  },
  {
    icon: "🧠",
    title: "Beyond Web Development",
    description:
      "Artificial Intelligence, Machine Learning, exploring new technologies, and continuously improving my problem-solving skills.",
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Section Heading */}
        <div className="about-heading">
          <span className="about-label">GET TO KNOW ME</span>
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            A little about my journey, my passion, and what drives me forward.
          </p>
        </div>

        {/* About Content */}
        <div className="about-content">
          <div className="about-text">
            <h3>
              Hi, I'm <span className="about-name">Ayon Banerjee</span>
            </h3>

            <h4>
              Computer Science & Engineering Student | Aspiring Software
              Developer
            </h4>

            <p>
              My programming journey started with curiosity about how websites
              and applications work behind the scenes. Over time, that
              curiosity turned into a passion for coding, problem-solving, and
              turning ideas into real-world projects.
            </p>

            <p>
              I've been developing my skills in JavaScript, React, Node.js,
              Express.js, MongoDB, and Next.js. Through hands-on projects, I'm
              continuously strengthening my understanding of full-stack
              development and learning how to build applications that are both
              useful and user-friendly.
            </p>

            <p>
              I especially enjoy creating responsive interfaces, developing
              REST APIs, implementing authentication systems, and connecting
              frontends with databases. I'm also interested in Artificial
              Intelligence and Machine Learning, and how these technologies
              can make software smarter and more helpful.
            </p>

            <p>
              Beyond coding, I'm a curious and growth-oriented person who
              believes in consistency, patience, and lifelong learning. My goal
              is to become a skilled Software Developer who builds reliable,
              impactful products and keeps growing with technology.
            </p>

            <div className="about-quote">
              <span className="quote-mark">“</span>
              <p>
                Learn continuously, build consistently, and make every project
                an opportunity to grow.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="about-highlights">
            {highlights.map((item, index) => (
              <article className="about-card" key={item.title}>
                <div className="about-card-icon" aria-hidden="true">
                  {item.icon}
                </div>

                <div className="about-card-content">
                  <span className="about-card-number">
                    0{index + 1}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="about-bottom">
          <div className="about-bottom-dot" />
          <p>
            Always learning. Always building. Always moving forward.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
