import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Consultations from './components/Consultations';
import Payments from './components/Payments';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Testing Lawyer Side</h1>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
