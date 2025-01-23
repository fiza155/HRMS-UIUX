import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/Layout/DashboardLayout";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import RegisterHR from "./pages/hr/RegisterHR";
import Compensation from "./pages/compensation/Compensation";
import AddCompensation from "./pages/compensation/AddCompensation";
import AllHR from "./pages/hr/AllHR";

import AllDepartments from "./pages/department/AllDepartments";
import AllEmployeePerformance from "./pages/employeePerformance/AllEmployeePerformance";
import AddEmployeePerformance from "./pages/employeePerformance/AddEmployeePerformance";
import AddJobHIstory from "./pages/jobHistory/AddJobHIstory";
import AllJobHistory from "./pages/jobHistory/AllJobHistory";
import AllPositions from "./pages/EmployeePosition/AllPositions";
import AddPosition from "./pages/EmployeePosition/AddPosition";
import PositionDetails from "./pages/EmployeePosition/PositionDetails";
import AllEmployees from "./pages/employees/AllEmployees";
import AddEmployee from "./pages/employees/AddEmployee";
import AllJobs from "./pages/jobPosting/AllJobs";
import PostAJob from "./pages/jobPosting/PostAJob";
import AllJobApplications from "./pages/alljobApplications/AllJobApplications";
import Attendence from "./pages/Attendence/Attendence";
import AttendenceForm from "./pages/Attendence/AttendenceForm";
import ComplaintForm from "./pages/complaint/ComplaintForm";
import ComplaintTable from "./pages/complaint/ComplaintTable";
import LeaveForm from "./pages/leave/LeaveForm";
import LeaveTable from "./pages/leave/LeaveTable";
import EmployDashboard from "./pages/Dashboard/EmployDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<DashboardLayout role="Employee" />}>
          {/* Employ Dashboard */}
          <Route path="/employ-dashboard" element={<EmployDashboard />} />
          <Route path="/complaintform" element={<ComplaintForm />} />
          <Route path="/leaveform" element={<LeaveForm />} />
        </Route>
        {/* Pages with DashboardLayout */}
        <Route element={<DashboardLayout role="Admin" />}>
          {/* Admin Dashboard */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          {/* HR Management */}
          <Route
            path="/admin/all-hr"
            element={<AllHR />}
            requiredRole="admin"
          />
          <Route
            path="/admin/hr-register"
            element={<RegisterHR />}
            requiredRole="admin"
          />
          {/* Compensation Management */}
          <Route
            path="/admin/all-compensation"
            element={<Compensation />}
            requiredRole="admin"
          />
          <Route
            path="/admin/add-compensation"
            element={<AddCompensation />}
            requiredRole="admin"
          />
          {/*Employee Performance Management */}
          <Route
            path="/admin/add-performance"
            element={<AddEmployeePerformance />}
            requiredRole="admin"
          />
          <Route
            path="/admin/performance"
            element={<AllEmployeePerformance />}
            requiredRole="admin"
          />
          {/* Employee Management */}
          <Route
            path="/employees"
            element={<AllEmployees />}
            requiredRole="admin"
          />
          <Route
            path="/register/employee"
            element={<AddEmployee />}
            requiredRole="admin"
          />
          {/* Job Posting Management */}
          <Route path="/jobs" element={<AllJobs />} requiredRole="admin" />

          <Route path="/post/job" element={<PostAJob />} requiredRole="admin" />

          {/*Job Applications */}
          <Route
            path="/all/applications"
            element={<AllJobApplications />}
            requiredRole="admin"
          />
          {/* Attendance Management */}
          <Route
            path="/post/attendance"
            element={<AttendenceForm />}
            requiredRole="admin"
          />
          <Route
            path="/attendance"
            element={<Attendence />}
            requiredRole="admin"
          />
          <Route
            path="/admin/all-departments"
            element={<AllDepartments />}
            requiredRole="admin"
          />

          {/*Employee Position Management */}
          <Route
            path="/positions"
            element={<AllPositions />}
            requiredRole="admin"
          />
          <Route
            path="/assign/position"
            element={<AddPosition />}
            requiredRole="admin"
          />
          <Route
            path="/position-details"
            element={<PositionDetails />}
            requiredRole="admin"
          />
          {/* Job History Management */}
          <Route
            path="/admin/add-job-history"
            element={<AddJobHIstory />}
            requiredRole="admin"
          />
          <Route
            path="/admin/all-job-history"
            element={<AllJobHistory />}
            requiredRole="admin"
          />
          {/* Complain */}
          <Route path="/complaintform" element={<ComplaintForm />} />
          <Route path="/complainttable" element={<ComplaintTable />} />

          {/* Leave*/}
          <Route path="/leaveform" element={<LeaveForm />} />
          <Route path="/allleaves" element={<LeaveTable />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
