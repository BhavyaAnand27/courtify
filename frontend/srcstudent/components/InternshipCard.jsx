import React from "react";

const InternshipCard = ({ title, location }) => {
  return (
    <div className="internship-card">
      <h3>{title}</h3>
      <p>{location}</p>
      <button>Apply Now</button>
    </div>
  );
};

export default InternshipCard;