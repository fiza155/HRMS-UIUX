import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Dropdown,
  DropdownDivider,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { FaMoon, FaSun } from "react-icons/fa"; // Icons for light/dark mode
import { Button } from "react-bootstrap";

const Header = () => {
  const [showSearchBox, setShowSearchBox] = useState(false); // Toggle search box visibility
  const navigate = useNavigate();

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  // Toggle search box visibility on mobile
  const handleSearchToggle = () => {
    setShowSearchBox(!showSearchBox);
  };

  // Toggle dark mode on body
  const toggleDarkMode = () => {
    const currentTheme = document.body.getAttribute("data-bs-theme");
    if (currentTheme === "dark") {
      document.body.setAttribute("data-bs-theme", "light");
    } else {
      document.body.setAttribute("data-bs-theme", "dark");
    }
  };

  return (
    <div className="content-wrapper">
      <Navbar expand="lg" className="px-3 border-bottom">
        <div className="d-flex align-items-center w-100">
          {/* Search Bar */}
          <Form className="d-flex flex-grow-1 me-lg-4">
            <div
              className={`input-group ${showSearchBox ? "expanded" : ""}`}
              style={{ height: "2rem" }}
            >
              <span
                className="input-group-text  border-0"
                onClick={handleSearchToggle}
              >
                <i
                  className="fa fa-search"
                  aria-hidden="true"
                  style={{ color: "#a6a6a6" }}
                ></i>
              </span>
              <FormControl
                type="search"
                placeholder="Search..."
                className="border-0 form-control-sm formControl"
              />
            </div>
          </Form>
        </div>

        {/* Right Section */}
        <Nav className="ms-auto align-items-center">
          <Nav.Item className="me-3">
            <i className="bi bi-fullscreen icon" onClick={toggleFullScreen}></i>
          </Nav.Item>
          <Nav.Item className="me-3">
            <Button variant="link" onClick={toggleDarkMode}>
              {document.body.getAttribute("data-bs-theme") === "dark" ? (
                <FaSun />
              ) : (
                <FaMoon />
              )}
            </Button>
          </Nav.Item>
        </Nav>

        <Dropdown align="end">
          <Dropdown.Toggle
            variant=""
            className="d-flex align-items-center border-0 "
          >
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-circle me-2 profile-img"
            />
            <div>
              <div className="fw-bold user-details">HR Name</div>
              <small className="user-details">Founder</small>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <DropdownDivider />
            <Dropdown.Item href="#profile" className="dropdown-font shadow">
              Profile
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout} className="dropdown-font">
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </div>
  );
};

export default Header;
