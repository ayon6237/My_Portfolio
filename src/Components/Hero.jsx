import React from 'react';
import './Hero.css';
import heroImage from '../assets/IMG_20230905_002020.jpg'; 

const Hero = () => {
  return (
    <section id="about" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Ayon 👋</h1>
          <p>
            I'm a Fullstack (MERN) Web Developer.
            I create modern, fast and responsive web applications.
          </p>
          <a href="#projects" className="hero-btn">
            View My Work 🚀
          </a>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Ayon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;