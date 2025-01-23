import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, FormControl, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { FaMoon, FaSun } from "react-icons/fa";
import { Button } from "react-bootstrap";

const Header = () => {
  const [showSearchBox, setShowSearchBox] = useState(false); // Toggle search box visibility
  const [isDarkMode, setIsDarkMode] = useState(false); // Track dark mode
  const navigate = useNavigate();
  useEffect(() => {
    document.body.setAttribute("data-bs-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

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
    navigate("/signin");
  };

  // Toggle search box visibility on mobile
  const handleSearchToggle = () => {
    setShowSearchBox(!showSearchBox);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="d-flex content-wrapper">
      <Navbar expand="lg">
        <div className="d-flex ">
          {/* Search Bar */}
          <Form className="d-flex ">
            <div className={`input-group ${showSearchBox ? "expanded" : ""}`}>
              <span
                className="input-group-text border-1"
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
                className="border-1 form-control-sm formControl rounded-end-pill"
              />
            </div>
          </Form>
        </div>

        {/* Right Section */}
        <div className="d-flex flex-row ms-auto align-items-center ">
          <Nav.Item className="me-2">
            <i
              className="bi bi-fullscreen  rounded-icon icon"
              onClick={toggleFullScreen}
            ></i>
          </Nav.Item>
          <Nav.Item className="me-2  rounded-icon  icon">
            <Button
              variant="link"
              onClick={toggleDarkMode}
              className=" ms-2 "
              style={{ color: isDarkMode ? "goldenrod" : "white" }}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </Nav.Item>
        </div>

        <Dropdown align="end">
          <Dropdown.Toggle
            variant=""
            className="d-flex align-items-center border-0  p-2"
          >
            <div>
              <div className="fw-bold user-details">HR Name</div>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu className="p-0">
            {/* <Dropdown.Item href="#profile" className="dropdown-font shadow">
              Profile
            </Dropdown.Item> */}
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
