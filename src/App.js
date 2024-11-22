import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/Layout/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import RegisterHR from "./pages/HR.jsx/RegisterHR";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages without Sidebar & Header */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* Pages with Sidebar & Header */}
      {/* <Route
          path="/"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        /> */}
      <DashboardLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hr/registerHR" element={<RegisterHR />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;
