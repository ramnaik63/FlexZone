import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './MembersList.css'; // Import the external CSS file

function MembersList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch gym membership data from your API using Axios
    axios
      .get('http://localhost:5000/api/members')
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Render your members data in the component with class names
  return (
    <div className="members-container">
      <h2 className="members-heading">Our Members</h2>
      <table className="members-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Membership Type</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member._id}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.membershipType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MembersList;
