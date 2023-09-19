// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

function Header() {
  return (
    <header>
      <div className='overlay'></div> {/* Gray overlay */}
      <nav>
        <div className="logo">
          <img src="flexzonelogo.png" alt="FlexZone Logo" />
          <span className="logo-text">FlexZone</span>
        </div>
        <ul>
          {/* Use Link from React Router for navigation */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
