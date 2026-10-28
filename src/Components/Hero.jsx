
import React from 'react';
import './Hero.css';
import heroImage from '../assets/professional.png';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">

        {/* Profile Image */}
        <div className="hero-image-wrapper">
          <div className="hero-image-glow"></div>

          <div className="hero-image">
            <img
              src={heroImage}
              alt="Ayon Banerjee - Full Stack Web Developer"
            />
          </div>

          <div className="hero-image-caption">
            <span className="caption-dot"></span>
            Building something meaningful
          </div>
        </div>

        {/* Introduction */}
        <div className="hero-text">

          <span className="hero-badge">
            <span className="status-dot"></span>
            Full Stack Web Developer
          </span>

          <h1 className="typing-title">
            Hi, I'm{' '}
            <span className="hero-name">Ayon Banerjee</span>
          </h1>

          <h2 className="hero-subtitle typing-subtitle">
            I Build Modern Web Experiences.
          </h2>

          <p className="hero-description">
            I'm a Full Stack (MERN) Web Developer passionate about
            building modern, responsive, and user-friendly web
            applications. I enjoy turning ideas into practical
            digital solutions using clean code and modern technologies.
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="hero-btn primary-btn">
              View My Work
            </a>

            <a
              href="/Ayon-CV.pdf"
              download="Ayon-Banerjee-CV.pdf"
              className="hero-btn secondary-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="social-label">Find me on</span>

            <a
              href="https://github.com/ayon6237"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="social-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.2 3.23.91.1-.72.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.78 1.14 3 0 4.28-2.61 5.23-5.1 5.5.4.35.75 1.02.75 2.06v3.09c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn"
              className="social-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8 19H5V9h3ZM6.5 7.65A1.75 1.75 0 1 1 6.5 4.15a1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-4.87c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.26-1.87 2.57V19h-3V9h2.88v1.37h.04A3.16 3.16 0 0 1 15.27 8.8C18.3 8.8 19 10.8 19 13.4Z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>

        </div>
      </div>

      <div className="hero-bottom-line"></div>
    </section>
  );
};

export default Hero;
