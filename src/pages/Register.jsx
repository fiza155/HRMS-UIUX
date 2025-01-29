import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    emailaddress: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    emailaddress: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { username: "", emailaddress: "", password: "" };

    // Username validation
    if (!formData.username) {
      newErrors.username = "Full Name is required.";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.emailaddress) {
      newErrors.emailaddress = "Email address is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.emailaddress)) {
      newErrors.emailaddress = "Enter a valid email address.";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <div className="authentication-bg d-flex ">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div
              className="card shadow-sm border-0"
              style={{ borderRadius: "50px" }}
            >
              <div className="card-body p-4">
                <div className="account-box">
                  <div className="account-logo-box text-center pt-2">
                    <a href="">
                      <img
                        src="/assets/HRMS logo/Dark_logo.png"
                        alt="logo"
                        height="100"
                        width="170"
                      />
                    </a>
                    <h5 className="text-uppercase mb-1 mt-3">Register</h5>
                    <p style={{ fontSize: "0.875rem" }}>
                      Get access to your account
                    </p>
                  </div>

                  <form className="mt-3" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label
                        htmlFor="username"
                        className="form-label fw-semibold"
                        style={{ fontSize: "0.875rem" }}
                      >
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control form-control-sm py-2"
                        type="text"
                        id="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your Name"
                      />
                      {errors.username && (
                        <div className="text-danger">{errors.username}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="emailaddress"
                        className="form-label fw-semibold"
                        style={{ fontSize: "0.875rem" }}
                      >
                        Email address <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control form-control-sm py-2"
                        type="email"
                        id="emailaddress"
                        value={formData.emailaddress}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your Email"
                      />
                      {errors.emailaddress && (
                        <div className="text-danger">{errors.emailaddress}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="password"
                        className="form-label fw-semibold"
                        style={{ fontSize: "0.875rem" }}
                      >
                        Password <span className="text-danger">*</span>
                      </label>
                      <div className="position-relative w-100">
                        <input
                          className="form-control form-control-sm pe-5 py-2"
                          type={passwordVisible ? "text" : "password"}
                          id="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your password"
                        />
                        <button
                          type="button"
                          className="btn position-absolute top-50 end-0 translate-middle-y pe-3"
                          onClick={togglePasswordVisibility}
                          style={{ border: "none", background: "transparent" }}
                        >
                          {passwordVisible ? (
                            <i className="far fa-eye-slash"></i>
                          ) : (
                            <i className="far fa-eye"></i>
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <div className="text-danger">{errors.password}</div>
                      )}
                    </div>

                    <div
                      className="form-check mb-2"
                      style={{ fontSize: "0.875rem" }}
                    >
                      <input
                        id="remember"
                        type="checkbox"
                        className="form-check-input"
                        checked
                      />
                      <label htmlFor="remember" className="form-check-label">
                        Remember me
                      </label>
                    </div>
                    <NavLink to="/">
                      <button
                        className="btn w-100 text-white btn-sm py-2"
                        style={{
                          backgroundColor: "#49266a",
                          cursor: "pointer",
                        }}
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </NavLink>
                  </form>

                  {/* <div className="text-center mt-3">
                    <p className="text-muted" style={{ fontSize: "0.875rem" }}>
                      or Sign In with
                    </p>
                    <button className="btn btn-outline-info me-2 btn-sm">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="btn btn-outline-danger me-2 btn-sm">
                      <i className="fab fa-google"></i>
                    </button>
                    <button className="btn btn-outline-dark me-2 btn-sm">
                      <i className="fab fa-github"></i>
                    </button>
                  </div> */}

                  <div className="text-center mt-2">
                    <p
                      className="text-muted mb-0"
                      style={{ fontSize: "0.875rem" }}
                    >
                      Already have an account?
                      <Link to="/" className="text-decoration-none ms-1">
                        <b>Sign In</b>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
