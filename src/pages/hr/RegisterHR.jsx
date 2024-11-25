import React, { useState } from "react";

const RegisterHR = () => {
  const [formData, setFormData] = useState({
    username: "",
    emailaddress: "",
    password: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (!formData.username) validationErrors.username = "Name is required";
    if (!formData.emailaddress)
      validationErrors.emailaddress = "Email is required";
    if (!formData.password) validationErrors.password = "Password is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
    } else {
      setErrors({});
      setSuccessMessage("HR Registered Successfully!");
      setFormData({
        username: "",
        emailaddress: "",
        password: "",
      });
    }
  };

  const handleCloseAlert = () => {
    setSuccessMessage(""); // Close alert when button  clicked
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="card shadow border">
            <div className="card-body px-4 py-5 shadow">
              <h3
                className="text-center text-uppercase mb-4 underline "
                style={{ color: "#49266a", textDecoration: "underline" }}
              >
                Register HR
              </h3>

              {successMessage && (
                <div
                  className="alert alert-light shadow-lg "
                  role="alert"
                  style={{
                    position: "fixed",

                    top: "100px",
                    right: "10px",
                    zIndex: 1050,
                    padding: "10px 40px 10px 10px",
                    animation: "fadeIn 0.5s ease, slideIn 0.5s ease",
                  }}
                >
                  {successMessage}
                  <button
                    onClick={handleCloseAlert}
                    style={{
                      background: "transparent",
                      border: "none",
                      fontSize: "14px",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                  >
                    ✕
                  </button>
                </div>
              )}

              <form className="mt-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="username"
                    className="form-label fw-semibold"
                    style={{ fontSize: "0.875rem" }}
                  >
                    Full Name
                  </label>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Enter your Name"
                  />
                  {errors.username && (
                    <small className="text-danger sm">{errors.username}</small>
                  )}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="emailaddress"
                    className="form-label fw-semibold"
                    style={{ fontSize: "0.875rem" }}
                  >
                    Email Address
                  </label>
                  <input
                    className="form-control form-control-sm"
                    type="email"
                    id="emailaddress"
                    value={formData.emailaddress}
                    onChange={handleInputChange}
                    placeholder="Enter your Email"
                  />

                  {errors.emailaddress && (
                    <small className="text-danger">{errors.emailaddress}</small>
                  )}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="form-label fw-semibold"
                    style={{ fontSize: "0.875rem" }}
                  >
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      className="form-control form-control-sm"
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your Password"
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
                  {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                  )}
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    className="btn w-50 text-white shadow-sm"
                    style={{
                      backgroundColor: "#49266a",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                    type="submit"
                  >
                    Register HR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes slideIn {
      from {
        transform: translateY(80px);
      }
      to {
        transform: translateY(0);
      }
    }
      
  `}
      </style>
    </div>
  );
};

export default RegisterHR;
