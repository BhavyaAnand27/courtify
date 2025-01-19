import React from "react";

const ConsultationRequests = () => {
  const requests = [
    { id: 1, client: "Alice", query: "Divorce case assistance" },
    { id: 2, client: "Bob", query: "Property dispute resolution" },
  ];

  return (
    <div className="consultation-requests">
      <h1>Consultation Requests</h1>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            <h3>{request.client}</h3>
            <p>{request.query}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultationRequests;
