// src_lawyer/components/LawyerSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const LawyerSidebar = () => {
    return (
        <aside className="lawyer-sidebar">
            <h2>Lawyer Portal</h2>
            <ul>
                <li><Link to="/lawyer/dashboard">Dashboard</Link></li>
                <li><Link to="/lawyer/profile">Profile</Link></li>
                <li><Link to="/lawyer/consultations">Consultations</Link></li>
                <li><Link to="/lawyer/messages">Messages</Link></li>
                <li><Link to="/lawyer/payments">Payments</Link></li>
                <li><Link to="/lawyer/reviews">Reviews</Link></li>
            </ul>
        </aside>
    );
};

export default LawyerSidebar;
