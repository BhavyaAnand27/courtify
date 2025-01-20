import React from "react";
import "./ResourceLibrary.css"; // Make sure to create a CSS file for styling

const ResourceLibrary = () => {
  return (
    <div className="resources">
      <h2>Resource Library</h2>
      <ul className="resource-list">
        <li>Study Materials</li>
        <li>Case Law Examples</li>
        <li>Legal Research Articles</li>
      </ul>
    </div>
  );
};

export default ResourceLibrary;
