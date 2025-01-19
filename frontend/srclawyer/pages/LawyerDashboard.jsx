import React from "react";
import DashboardCard from "../components/DashboardCard";

const LawyerDashboard = () => {
  const dashboardData = [
    { title: "Active Cases", count: 5 },
    { title: "Appointments Today", count: 3 },
    { title: "Pending Requests", count: 8 },
  ];

  return (
    <div className="dashboard">
      <h1>Lawyer Dashboard</h1>
      <div className="dashboard-cards">
        {dashboardData.map((item, index) => (
          <DashboardCard key={index} title={item.title} count={item.count} />
        ))}
      </div>
    </div>
  );
};

export default LawyerDashboard;
