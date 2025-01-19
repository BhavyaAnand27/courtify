import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LawyerDashboard from "./pages/LawyerDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/lawyer" element={<LawyerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
