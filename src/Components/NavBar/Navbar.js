
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="#hero">Home</a>
      <a href="#about">About Me</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
