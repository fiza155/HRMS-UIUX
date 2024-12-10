import React from "react";
import CompensationChart from "../../components/compensationChart/CompensationChart";
import PayRollChart from "../../components/payRollChart/PayRollChart";
import "../../components/Layout/DashboardLayout.css";
import Cards from "../../components/Containers/Cards";

const AdminDashboard = () => {
  return (
    <>
      <Cards />
      <div className="dashboard-container">
        <CompensationChart />
        <PayRollChart />
      </div>
    </>
  );
};

export default AdminDashboard;
