import React from "react";

const AppointmentTable = ({ appointments }) => {
  return (
    <table className="appointment-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Client</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment) => (
          <tr key={appointment.id}>
            <td>{appointment.id}</td>
            <td>{appointment.client}</td>
            <td>{appointment.date}</td>
            <td>{appointment.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentTable;
