
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">IHM Sumerpur</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li
          className="dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <span>Courses ▾</span>
          {dropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/courses">All Courses</Link></li>
              <li><Link to="/courses/bsc-hha">B.Sc H&HA</Link></li>
              <li><Link to="/courses/diploma">Diploma</Link></li>
              <li><Link to="/courses/craftsmanship">Craftsmanship</Link></li>
              <li><Link to="/courses/skill-development">Skill Development</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/downloads">Downloads</Link></li>
        <li><Link to="/principal">Principal's Message</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
