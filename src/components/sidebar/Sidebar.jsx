import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";
import {
  faBars,
  faDashboard,
  faChartBar,
  faCalendarAlt,
  faUsers,
  faChartSimple,
  faFileUpload,
  faHistory,
  faMagnifyingGlassChart,
  faBox,
  faCalendarMinus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUserTie,
  faBuilding,
  faChair,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

// Custom Hook for screen size
function useIsLargeScreen() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 790);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 790);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLargeScreen;
}

function Sidebar() {
  const isLargeScreen = useIsLargeScreen();
  const [isExpanded, setIsExpanded] = useState(isLargeScreen);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const toggleDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsExpanded(isLargeScreen); // Adjust sidebar based on screen size
  }, [isLargeScreen]);

  const navItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: faDashboard,
      path: "/admin-dashboard",
    },
    { key: "hr", label: "HR", icon: faUserTie },
    { key: "attendance", label: "Attendance", icon: faCalendarAlt },
    { key: "compensation", label: "Compensation", icon: faChartBar },
    {
      key: "departments",
      label: "All Departments",
      icon: faBuilding,
      path: "/admin/all-departments",
    },
    { key: "employs", label: "Employs", icon: faUsers },
    { key: "employsposition", label: "Employs Position", icon: faChair },
    {
      key: "employsperformance",
      label: "Employs Performance",
      icon: faChartSimple,
    },
    {
      label: "All Job Applications",
      icon: faMagnifyingGlassChart,
      path: "/all/applications",
    },
    { key: "jobPosting", label: "Job Posting", icon: faFileUpload },
    { key: "jobhistory", label: "Job History", icon: faHistory },
    { key: "complaint", label: "Complaint", icon: faBox },
    { key: "leave", label: "Leave", icon: faCalendarMinus },
  ];

  const dropdownOptions = {
    dashboard: [
      { label: "Admin dashboard", path: "/admin/dashboard" },
      { label: "employ dashboard", path: "/employ-dashboard" },
    ],
    hr: [
      { label: "All HRs", path: "/admin/all-hr" },
      { label: "Register HR", path: "/admin/hr-register" },
    ],
    employs: [
      { label: "All Employees", path: "/employees" },
      { label: "Add an Employee", path: "/register/employee" },
    ],
    employsposition: [
      { label: "All Positions", path: "/positions" },
      { label: "Add Position", path: "/assign/position" },
      { label: "Position Details", path: "/position-details" },
    ],
    jobPosting: [
      { label: "All Jobs", path: "/jobs" },
      { label: "Post a Job", path: "/post/job" },
    ],
    compensation: [
      { label: "All Compensation", path: "/admin/all-compensation" },
      { label: "Add Compensation", path: "/admin/add-compensation" },
    ],
    jobhistory: [
      { label: "View Job History", path: "/admin/all-job-history" },
      { label: "Add Job History", path: "/admin/add-job-history" },
    ],
    employsperformance: [
      { label: "All Performance", path: "/admin/performance" },
      { label: "Add Performance", path: "/admin/add-performance" },
    ],
    attendance: [
      { label: "Attendance", path: "/attendance" },
      { label: "Attendance Form", path: "/post/attendance" },
    ],
    complaint: [
      { label: "All Complaints", path: "/complainttable" },
      { label: "Complaint Form", path: "/complaintform" },
    ],
    leave: [
      { label: "All Leaves", path: "/allleaves" },
      { label: "Leave Form", path: "/leaveform" },
    ],
  };

  const isSidebarOpen = isExpanded;

  return (
    <div
      ref={sidebarRef}
      className={`sidebar  ${
        isSidebarOpen ? "sidebar-expanded" : "sidebar-collapsed"
      }`}
    >
      <div className="sidebar-header ">
        {isSidebarOpen && (
          <NavLink to="/admin-dashboard" className="sidebar-logo">
            <img
              src="/assets/HRMS logo/Dark_logo.png"
              alt="Logo"
              className="logo"
            />
          </NavLink>
        )}
        <button className="sidebar-toggle rounded-icon" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <ul className="sidebar-nav">
        {navItems.map((item) => {
          const hasDropdown = dropdownOptions[item.key];
          return (
            <li
              key={item.key}
              className={`sidebar-nav-item ${
                activeDropdown === item.key ? "expanded" : ""
              }`}
            >
              {hasDropdown ? (
                <Dropdown
                  show={activeDropdown === item.key}
                  onToggle={() => toggleDropdown(item.key)}
                >
                  <Dropdown.Toggle
                    variant="link"
                    id={`dropdown-${item.key}`}
                    className="sidebar-link text-decoration-none px-0"
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    {isSidebarOpen && (
                      <span className="ps-3">{item.label}</span>
                    )}
                  </Dropdown.Toggle>
                  <div className="dropdown-menu p-0 ms-4">
                    {dropdownOptions[item.key].map((option) => (
                      <Dropdown.Item
                        as={Link}
                        to={option.path}
                        key={`${item.key}-${option.label}`}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {option.label}
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown>
              ) : (
                <Link
                  to={item.path || `/${item.key}`}
                  className="sidebar-link text-decoration-none"
                >
                  <FontAwesomeIcon icon={item.icon} />
                  {isSidebarOpen && <span className="px-3">{item.label}</span>}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
