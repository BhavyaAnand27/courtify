import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Navigation</h3>
      <ul>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resources"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Resource Library
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/internships"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Internship Finder
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/forum"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Mentorship Forum
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
