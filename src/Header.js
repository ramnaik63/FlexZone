import React from 'react';
import './Header.css'
import Home from './home';

function Header() {
 

    return (
      <header >
          <Home/>
          <div className='overlay'></div> {/* Gray overlay */}
          <nav>
            <div className="logo">
              <img src="flexzonelogo.png" alt="FlexZone Logo" />
              <span className="logo-text">FlexZone</span>
            </div>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            {/* <div className="brand">FLEXZONE</div> */}
          </nav>
        </header>
      );
      
      
}

export default Header;
