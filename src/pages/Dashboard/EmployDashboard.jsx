import React from "react";
import { useNavigate } from "react-router-dom";
import CompensationChart from "../../components/compensationChart/CompensationChart";
import EmpPerformanceChart from "../../components/employePerformance/EmpPerformanceChart";
import AttendenceChart from "../../components/attendenceChart/AttendenceChart";
import AllJobsTable from "../../components/allJobsTable/AllJobsTable";

const EmployDashboard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="p-4">
      <div className="gap-4 mx-2 d-flex justify-content-between mb-3">
        {/* Leave Form */}
        <div
          className="form-box hover-container"
          onClick={() => handleNavigation("/leaveform")}
        >
          <h3>Leave Form</h3>
          <p>Apply for leave quickly.</p>
        </div>

        {/* Complaint Form Box */}
        <div
          className="form-box hover-container"
          onClick={() => handleNavigation("/complaintform")}
        >
          <h3>Complaint Form</h3>
          <p>Submit your complaint.</p>
        </div>
      </div>

      <div className="dashboard-container">
        <CompensationChart
          hideBasicSalary={true}
          isAdmin={false}
          loggedInEmployee={{
            name: "John Doe",
            data: [
              { name: "Jan", BasicSalary: 50000, Bonus: 70000 },
              { name: "Feb", BasicSalary: 52000, Bonus: 72000 },
              { name: "Mar", BasicSalary: 35000, Bonus: 65000 },
              { name: "Apr", BasicSalary: 58000, Bonus: 63000 },
              { name: "May", BasicSalary: 70000, Bonus: 74000 },
              { name: "Jun", BasicSalary: 62000, Bonus: 51000 },
              { name: "Jul", BasicSalary: 64000, Bonus: 82000 },
              { name: "Aug", BasicSalary: 66000, Bonus: 70000 },
              { name: "Sep", BasicSalary: 68000, Bonus: 68000 },
              { name: "Oct", BasicSalary: 70000, Bonus: 74000 },
              { name: "Nov", BasicSalary: 72000, Bonus: 86000 },
              { name: "Dec", BasicSalary: 75000, Bonus: 95000 },
            ],
          }}
        />
        <AttendenceChart />
      </div>
      <div className="dashboard-container">
        <AllJobsTable />
        <EmpPerformanceChart />
      </div>
    </div>
  );
};

export default EmployDashboard;
