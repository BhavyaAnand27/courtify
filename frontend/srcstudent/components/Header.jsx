import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Ensure you create this CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <h1>Law Student Portal</h1>
      <nav className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/internships">Internships</Link>
        <Link to="/forum">Forum</Link>
      </nav>
    </header>
  );
};

export default Header;
