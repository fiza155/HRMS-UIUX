import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import "./DashboardLayout.css";
import { Outlet } from "react-router-dom";
const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content ">
        <Header />

        {/* Dynamic Page Content */}
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
