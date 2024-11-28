import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateForm = (e) => {
    e.preventDefault();
    let isValid = true;

    // Email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Password validation
    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      console.log("Form is valid, proceed with login");
    }
  };

  return (
    <div className="authentication-bg d-flex vh-100">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <div className="account-box text-center">
                  <div className="account-logo-box">
                    <a href="">
                      <img
                        src="/assets/HRMS logo/Dark_logo.png"
                        alt="logo"
                        height="100"
                        width="200"
                      />
                    </a>
                  </div>
                  <h6
                    className="text-uppercase mb-1 mt-3 "
                    style={{ color: "#49266a" }}
                  >
                    Welcome Back!
                  </h6>
                  <p
                    className="text-muted mb-4"
                    style={{ fontSize: "0.875rem" }}
                  >
                    Login to Continue
                  </p>
                </div>
                <form onSubmit={validateForm}>
                  <div className="mb-3">
                    <label
                      htmlFor="emailaddress"
                      className="form-label fw-semibold"
                      style={{ fontSize: "0.875rem" }}
                    >
                      Email address <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="emailaddress"
                      className="form-control form-control-sm"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    {emailError && (
                      <small className="text-danger">{emailError}</small>
                    )}
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className="form-label fw-semibold"
                      style={{ fontSize: "0.875rem" }}
                    >
                      Password <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="input-group w-100">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        className="form-control form-control-sm "
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="btn btn-light btn-sm"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <i className="far fa-eye-slash"></i>
                        ) : (
                          <i className="far fa-eye"></i>
                        )}
                      </button>
                    </div>
                    {passwordError && (
                      <small className="text-danger">{passwordError}</small>
                    )}
                    <div className="text-end">
                      <a
                        href="#"
                        className="text-muted"
                        style={{ fontSize: "0.75rem" }}
                      >
                        <small>Forgot your password?</small>
                      </a>
                    </div>
                  </div>

                  <div
                    className="mb-3 form-check"
                    style={{ fontSize: "0.875rem" }}
                  >
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                      Remember me
                    </label>
                  </div>

                  <div className="d-grid mb-3">
                    <NavLink to="/dashboard" className="text-decoration-none">
                      <button
                        type="submit"
                        className="btn w-100 text-white btn-sm"
                        style={{ backgroundColor: "#49266a" }}
                      >
                        Sign In
                      </button>
                    </NavLink>
                  </div>
                </form>

                <div className="text-center mt-3">
                  <p className="text-muted" style={{ fontSize: "0.875rem" }}>
                    or Sign In with
                  </p>
                  <button className="btn btn-outline-info me-2  btn-sm ">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn btn-outline-danger me-2 btn-sm">
                    <i className="fab fa-google"></i>
                  </button>
                  <button className="btn btn-outline-dark me-2 btn-sm">
                    <i className="fab fa-github"></i>
                  </button>
                </div>

                <div className="text-center mt-4">
                  <p className="mb-0" style={{ fontSize: "0.875rem" }}>
                    Don't have an account?
                    <Link to="/signup" className="text-decoration-none">
                      <b>Sign Up</b>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
