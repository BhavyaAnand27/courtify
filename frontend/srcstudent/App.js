import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ResourceLibrary from "./pages/ResourceLibrary";
import InternshipFinder from "./pages/InternshipFinder";
import MentorshipForum from "./pages/MentorshipForum";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resources" element={<ResourceLibrary />} />
          <Route path="/internships" element={<InternshipFinder />} />
          <Route path="/forum" element={<MentorshipForum />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;
