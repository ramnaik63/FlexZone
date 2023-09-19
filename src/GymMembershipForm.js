import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './GymMembershipForm.css'
import MembersList from './MembersList';

function GymMembershipForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    membershipType: 'basic',
  });

  const handleChange = (e) => {
    // Update form data when input fields change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submit form data to the backend using Axios
      const response = await axios.post('http://localhost:5000/api/submit-membership', formData);

      if (response.status === 200) {
        // Handle successful form submission
        console.log('Form submitted successfully');
        // You can also navigate to a different page or show a success message here
      } else {
        // Handle errors if the submission fails
        console.error('Form submission failed');
      }
    } catch (error) {
      // Handle network errors or other unexpected errors
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
  <h2>Book Gym Membership</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label className="label">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="input"
      />
    </div>
    <div className="form-group">
      <label className="label">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="input"
      />
    </div>
    <div className="form-group">
      <label className="label">Membership Type:</label>
      <select
        name="membershipType"
        value={formData.membershipType}
        onChange={handleChange}
        className="select"
      >
        <option value="basic">Basic</option>
        <option value="premium">Premium</option>
        <option value="pro">Pro</option>
        {/* Add more membership types if needed */}
      </select>
    </div>
    <button type="submit" className="button">
      Submit
    </button>
  </form>
  <MembersList/>
</div>

  );
}

export default GymMembershipForm;
