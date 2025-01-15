import React, { useEffect } from "react";
import CompensationChart from "../../components/compensationChart/CompensationChart";
import PayRollChart from "../../components/payRollChart/PayRollChart";
import "../../components/Layout/DashboardLayout.css";
import Cards from "../../components/Containers/Cards";
import EmpPerformanceChart from "../../components/employePerformance/EmpPerformanceChart";
import AttendenceChart from "../../components/attendenceChart/AttendenceChart";

const AdminDashboard = () => {
  return (
    <>
      <Cards />
      <div className="dashboard-container ">
        <CompensationChart isAdmin={true} />
        <PayRollChart />
      </div>
      <div className="dashboard-container">
        <EmpPerformanceChart />
        <AttendenceChart />
      </div>
    </>
  );
};

export default AdminDashboard;
