import React from "react";
import "./MentorshipForum.css"; // Make sure to add a CSS file for styling

const MentorshipForum = () => {
  return (
    <div className="mentorship-forum">
      <h2>Mentorship Forum</h2>
      <p>Discuss with peers and experienced lawyers.</p>
      <div className="forum-discussions">
        <p>No discussions yet. Be the first to start one!</p>
      </div>
    </div>
  );
};

export default MentorshipForum;
