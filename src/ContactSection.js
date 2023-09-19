import axios from 'axios';
import React, { useState } from 'react';
import './ContactSection.css'; // Import the external CSS file

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the backend to store in the database
    axios
      .post('/api/contact', formData)
      .then((response) => {
        // Handle success, e.g., show a success message to the user
        console.log('Query saved successfully');
        // You can also reset the form or navigate to a thank-you page
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        // Handle error, e.g., display an error message to the user
        console.error('Error saving query:', error);
      });
  };

  return (
    <div className="contact-us-container">
      <br/>
  <h2 className="contact-heading">Contact Us</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label className="form-label">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="form-input"
        required
      />
    </div>
    <div className="form-group">
      <label className="form-label">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="form-input"
        required
      />
    </div>
    <div className="form-group">
      <label className="form-label">Message:</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="form-textarea"
        required
      ></textarea>
    </div>
    <button type="submit" className="form-submit-button">
      Submit
    </button>
  </form>
</div>

  );
}

export default ContactSection;
