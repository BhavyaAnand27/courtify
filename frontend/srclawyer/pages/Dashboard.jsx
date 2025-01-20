import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { token, backendUrl } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState({
    clientsCount: 0,
    upcomingConsultations: 0,
    totalEarnings: 0,
  });

  // Fetch dashboard data
  const getDashboardData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/lawyer/dashboard`, {
        headers: { token },
      });
      if (data.success) {
        setDashboardData(data.dashboardData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getDashboardData();
    }
  }, [token]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Total Clients</h2>
          <p className="text-2xl">{dashboardData.clientsCount}</p>
        </div>
        <div className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Upcoming Consultations</h2>
          <p className="text-2xl">{dashboardData.upcomingConsultations}</p>
        </div>
        <div className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Total Earnings</h2>
          <p className="text-2xl">₹{dashboardData.totalEarnings}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
