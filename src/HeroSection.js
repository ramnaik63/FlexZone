// MotivationalHero.js
import React from 'react';

import './HeroSection.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom/cjs/react-router-dom';

function HeroSection() {
  return (
    <div className="motivational-hero">
      <div className="hero-content">
        <h1 className="hero-title">Achieve Your Fitness Goals</h1>
        <p className="hero-subtitle">Transform Your Body and Your Life</p>
        {/* <button className="hero-button">Get Started</button> */}
        <Link to='/subscribe' className="hero-button">Get Started</Link>
      </div>
    </div>
  );
}

export default HeroSection;
