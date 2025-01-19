import React from "react";
import AppointmentTable from "../components/AppointmentTable";

const LawyerAppointments = () => {
  const appointments = [
    { id: 1, client: "Alice", date: "2025-01-22", status: "Confirmed" },
    { id: 2, client: "Bob", date: "2025-01-23", status: "Pending" },
  ];

  return (
    <div className="appointments">
      <h1>Appointments</h1>
      <AppointmentTable appointments={appointments} />
    </div>
  );
};

export default LawyerAppointments;
