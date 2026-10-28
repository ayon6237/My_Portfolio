
import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-about">
          <a href="#hero" className="footer-logo">
            Ayon<span>.</span>
          </a>

          <p>
            Aspiring Software Developer passionate about building
            modern, responsive, and user-friendly web applications.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#hero">Home</a>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Connect With Me</h3>

          <a
            href="https://github.com/ayon6237"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

        
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Ayon Banerjee. All rights reserved.
        </p>

        <a href="#hero" className="back-to-top">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
