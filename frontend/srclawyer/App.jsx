import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages
import CaseStudies from "./pages/CaseStudies";
import Clients from "./pages/Clients";
import Dashboard from "./pages/Dashboard";
import LawyerProfile from "./pages/LawyerProfile";
import Login from "./pages/Login";
import MyClients from "./pages/MyClients";

// Components
import LawyerHeader from "./components/LawyerHeader";
import LawyerFooter from "./components/LawyerFooter";

// Context
import { AppContextProvider } from "./context/AppContextProvider";

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <div className="App">
          <LawyerHeader />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/profile" element={<LawyerProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/my-clients" element={<MyClients />} />
          </Routes>
          <LawyerFooter />
        </div>
      </Router>
    </AppContextProvider>
  );
};

export default App;
