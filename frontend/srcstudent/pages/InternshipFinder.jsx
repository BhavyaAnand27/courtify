import React from "react";
import InternshipCard from "../components/InternshipCard";
import "./InternshipFinder.css"; // Make sure to add a CSS file for styling

const InternshipFinder = () => {
  return (
    <div className="internship-finder">
      <h2>Find Internships</h2>
      <div className="internship-cards">
        <InternshipCard title="Corporate Law Internship" location="Delhi" />
        <InternshipCard title="Civil Law Internship" location="Mumbai" />
      </div>
    </div>
  );
};

export default InternshipFinder;
