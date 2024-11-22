import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Dropdown,
  DropdownDivider,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="content-wrapper">
      <Navbar expand="lg" className="px-3 border-bottom">
        <div className="d-flex align-items-center">
          <Form className="d-flex flex-grow-1 me-lg-3">
            <div className="input-group" style={{ height: "2.5rem" }}>
              <span className="input-group-text bg-light border-0">
                <i
                  className="fa fa-search"
                  aria-hidden="true"
                  style={{ fontSize: "0.8rem", color: "#a6a6a6" }}
                ></i>
              </span>
              <FormControl
                type="search"
                placeholder="Search..."
                className="form-control bg-light border-0"
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
            <i
              className={`bi bi-moon icon ${
                darkMode ? "text-white" : "text-muted"
              }`}
              onClick={toggleDarkMode}
            ></i>
          </Nav.Item>
        </Nav>

        <Dropdown align="end">
          <Dropdown.Toggle
            variant="light"
            className="d-flex align-items-center border-0 bg-light "
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
            {/* <small className="user-details">Welcome! </small> */}
            <DropdownDivider />
            <Dropdown.Item
              href="#logout"
              className="dropdown-font shadow zindex"
            >
              Profile
            </Dropdown.Item>
            <Dropdown.Item href="#logout" className="dropdown-font">
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </div>
  );
};

export default Header;
