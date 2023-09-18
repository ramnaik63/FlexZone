// ServicesSection.js
import React from 'react';
import './ServicesSystem.css';



// PriceCard component
function PriceCard({ title, price }) {
  return (
    <div className="price-card">
      <h3>{title}</h3>
      <p>{price}</p>
      {/* Add additional features or details here */}
    </div>
  );
}

function ServicesSection() {
  const classSchedule = {
    Monday: 'Yoga Class - 9:00 AM to 10:30 AM',
    Tuesday: 'Pilates Class - 10:00 AM to 11:30 AM',
    Wednesday: 'Zumba Class - 9:30 AM to 11:00 AM',
    Thursday: 'Spinning Class - 8:30 AM to 10:00 AM',
    Friday: 'Boxing Class - 11:00 AM to 12:30 PM',
    Saturday: 'Aerobics Class - 10:30 AM to 12:00 PM',
  };
 
  return (
    <div className="services-section">
      <div className="class-schedule">
        <h2>Class Schedule</h2>
        <div className="services-section">
      <div className="class-schedule">
        
        <table className="class-schedule-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(classSchedule).map((day) => (
              <tr key={day}>
                <td>{day}</td>
                <td>{classSchedule[day]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
      
      <div className="price-cards">
        <h2>Price Plans</h2>
        <div className="price-card-container">
          <PriceCard title="Basic Plan" price="$19.99/month" />
          <PriceCard title="Pro Plan" price="$39.99/month" />
          <PriceCard title="Premium Plan" price="$59.99/month" />
          {/* Add more price cards as needed */}
        </div>
      </div>
      <div className="book-schedule">
        <h2>Book a Schedule</h2>
        <p>Ready to get started? Book your class now!</p>
        <a href="/book" className="book-button">
          Book Now
        </a>
      </div>
    </div>
  );
}

export default ServicesSection;
