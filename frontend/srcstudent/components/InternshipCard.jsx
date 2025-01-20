import React from "react";
import "./InternshipCard.css"; // Add this CSS file for styling

const InternshipCard = ({ title, location }) => {
  return (
    <div className="internship-card">
      <h3 className="internship-title">{title}</h3>
      <p className="internship-location">{location}</p>
      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default InternshipCard;
