import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ComingSoon from "./pages/ComingSoon";
import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-20 px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-primary to-secondary text-textLight">

        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
