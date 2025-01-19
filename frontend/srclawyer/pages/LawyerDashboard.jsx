// src_lawyer/pages/LawyerDashboard.jsx
import React from "react";
import LawyerSidebar from "../components/LawyerSidebar";
import Dashboard from "../components/Dashboard";

const LawyerDashboard = () => {
    return (
        <div className="lawyer-dashboard">
            <LawyerSidebar />
            <main>
                <Dashboard />
            </main>
        </div>
    );
};

export default LawyerDashboard;
