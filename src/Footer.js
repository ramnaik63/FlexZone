// Footer.js
import React from 'react';
import './Footer.css'; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 FlexZone</p>
        <ul className="social-links">
          <li><a href="#" className="social-link">Facebook</a></li>
          <li><a href="#" className="social-link">Instagram</a></li>
          <li><a href="#" className="social-link">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
