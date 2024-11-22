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
  faPenToSquare,
  faFileUpload,
} from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons/faUserTie";
import "./Sidebar.css";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true); // Controls manual toggle
  const [isHovered, setIsHovered] = useState(false); // Controls hover expansion
  const [activeDropdown, setActiveDropdown] = useState(null);
  const sidebarRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const navItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: faDashboard,
      path: "/dashboard",
    },
    { key: "hr", label: "HR", icon: faUserTie },
    { key: "employees", label: "Employees", icon: faUsers },
    { key: "jobPosting", label: "Job Posting", icon: faFileUpload },
    { key: "jobApplication", label: "Job Application", icon: faPenToSquare },
    { key: "performance", label: "Performance", icon: faChartSimple },
    { key: "compensation", label: "Compensation", icon: faChartBar },
    { key: "attendance", label: "Attendance", icon: faCalendarAlt },
  ];
  const dropdownOptions = {
    hr: [
      { label: "All HRs", path: "/hr/all" },
      { label: "Register HR", path: "/hr/registerHR" },
    ],
    employees: [
      { label: "All Employees", path: "/employees/all" },
      { label: "Add an Employee", path: "/employees/addEmployee" },
    ],
    jobPosting: [
      { label: "Post a Job", path: "/jobPosting/post" },
      { label: "All Jobs", path: "/jobPosting/allJobs" },
    ],
    jobApplication: [
      {
        label: "All Job Applications",
        path: "/jobApplication/allApplications",
      },
    ],
  };

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

  const isSidebarOpen = isExpanded || isHovered;

  return (
    <div
      ref={sidebarRef}
      className={`sidebar ${
        isSidebarOpen ? "sidebar-expanded" : "sidebar-collapsed"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sidebar-header">
        {isSidebarOpen && (
          <NavLink to="/" className="sidebar-logo">
            <img
              src="/assets/HRMS logo/Dark_logo.png"
              alt="Logo"
              className="logo"
            />
          </NavLink>
        )}
        <button className="sidebar-toggle" onClick={toggleSidebar}>
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
                    className="text-decoration-none px-0"
                    onClick={() => toggleDropdown(item.key)}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    {isSidebarOpen && (
                      <span className="px-3">{item.label}</span>
                    )}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {dropdownOptions[item.key].map((option, index) => (
                      <Dropdown.Item
                        as={Link}
                        to={option.path}
                        key={index}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {option.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link
                  to={`/${item.key}`}
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
