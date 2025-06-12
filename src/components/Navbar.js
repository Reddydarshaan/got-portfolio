import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-title">
          Game of Thrones Portfolio
        </a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home" className="navbar-link">Home</a>
        </li>
        <li>
          <a href="#about" className="navbar-link">About</a>
        </li>
        <li>
          <a href="#projects" className="navbar-link">Projects</a>
        </li>
        <li>
          <a href="#contact" className="navbar-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;