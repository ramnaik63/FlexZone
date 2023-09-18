// AboutSection.js
import React from 'react';
import './AboutSection.css'
import heroImage from './3.avif'; // Replace with your hero image path
import T1 from './T1.jpg'
import T2 from './Ram.jpg'
import T3 from './Sharath.jpg'




// User experiences data
const userExperiences = [
  {
    id: 1,
    image: '', // Replace with the image path for user 1
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    id: 2,
    image: 'Ram.jpg', // Replace with the image path for user 2
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
  // Add more user experiences as needed
];

function AboutSection() {
  return (
    <div className="about-section">
      <div className="about-content">
        <p>
          Welcome to FlexZone, your premier fitness studio. We are dedicated to helping you
          transform your body and achieve your fitness goals. Our experienced trainers and
          state-of-the-art facilities provide the perfect environment for your fitness journey.
        </p>
      </div>
      <h2 className="trainers-title">Trainers</h2>
      <div className="trainers-grid">
        {/* Trainer Cards */}
        <div className="trainer-card">
          <img
            src={T1}
            alt="Trainer 1"
            className="trainer-image"
          />
          <div className="trainer-name">Anurag Bhukebag</div>
          <p>Certified Personal Trainer</p>
        </div>
        <div className="trainer-card">
          <img
            src={T2}
            alt="Trainer 2"
            className="trainer-image"
          />
          <div className="trainer-name">Ram Naik</div>
          <p>Fitness Instructor</p>
        </div>
        <div className="trainer-card">
          <img
            src={T3}
            alt="Trainer 3"
            className="trainer-image"
          />
          <div className="trainer-name">Sharath Heralagi</div>
          <p>Nutritionist</p>
        </div>
     </div>
     </div>
  );
}

export default AboutSection;
