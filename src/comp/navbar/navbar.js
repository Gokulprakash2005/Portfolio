import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className='name'>
        <h3 className='nav-head'>portfolio</h3>
      </div>
      <div className="menu">
        <a href="#home" className="nav-item">Home</a>
        <a href="#about" className="nav-item">About Us</a>
        <a href="#services" className="nav-item">Resume</a>
        <a href="#contact" className="nav-item">Contact</a>
        <button className="nav-front-new"><a href="#contact" >Hire Me</a></button>
      </div>
    </nav>
  );
}

export default Navbar;

