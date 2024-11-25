import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/Layout/DashboardLayout";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import RegisterHR from "./pages/hr/RegisterHR";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Pages with DashboardLayout */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/hr/registerHR" element={<RegisterHR />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
