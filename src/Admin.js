// AdminPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css'; // Import the external CSS file

function Admin() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    // Fetch contact queries from the backend
    axios
      .get('http://localhost:5000/api/queries')
      .then((response) => {
        setQueries(response.data);
      })
      .catch((error) => {
        console.error('Error fetching queries:', error);
      });
  }, []);

  return (
    <div className="admin-container">
      <h2 className="admin-heading">Admin Page - Contact Queries</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th className="admin-table-header">Name</th>
            <th className="admin-table-header">Email</th>
            <th className="admin-table-header">Message</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((query, index) => (
            <tr key={index} className="admin-table-row">
              <td className="admin-table-data">{query.name}</td>
              <td className="admin-table-data">{query.email}</td>
              <td className="admin-table-data">{query.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
