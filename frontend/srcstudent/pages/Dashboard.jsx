import React from "react";
import "./Dashboard.css"; // Make sure to create a CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome, [Student Name]</h2>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Upcoming Deadlines</h3>
          <p>No deadlines this week!</p>
        </div>
        <div className="card">
          <h3>Saved Internships</h3>
          <p>View and apply for internships you've saved.</p>
        </div>
        <div className="card">
          <h3>Activity Feed</h3>
          <p>Latest discussions in the mentorship forum.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
