import React from "react";

const LawyerMessages = () => {
  const messages = [
    { id: 1, from: "Alice", text: "Can we discuss the case tomorrow?" },
    { id: 2, from: "Bob", text: "Please update me on the status." },
  ];

  return (
    <div className="lawyer-messages">
      <h1>Messages</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <h3>From: {message.from}</h3>
            <p>{message.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LawyerMessages;
