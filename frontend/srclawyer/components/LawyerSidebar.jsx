import React from "react";
import { Link } from "react-router-dom";

const LawyerSidebar = () => {
    return (
        <aside className="lawyer-sidebar">
            <h2>Lawyer Portal</h2>
            <ul>
                <li><Link to="/Dashboard">Dashboard</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
                <li><Link to="/Consultations">Consultations</Link></li>
                <li><Link to="/Messages">Messages</Link></li>
                <li><Link to="/Payments">Payments</Link></li>
                <li><Link to="/Reviews">Reviews</Link></li>
            </ul>
        </aside>
    );
};

export default LawyerSidebar;
