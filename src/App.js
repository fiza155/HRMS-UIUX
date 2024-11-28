import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/Layout/DashboardLayout";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import RegisterHR from "./pages/hr/RegisterHR";
import Compensation from "./pages/compensation/Compensation";
import AddCompensation from "./pages/compensation/AddCompensation";
import AllHr from "./pages/hr/AllHr";

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
          <Route path="/hr/all" element={<AllHr />} />

          <Route
            path="/compensation/allcompensation"
            element={<Compensation />}
          />
          <Route
            path="/compensation/addcompensation"
            element={<AddCompensation />}
          />
          <Route path="/dashboard" element={<AddCompensation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
