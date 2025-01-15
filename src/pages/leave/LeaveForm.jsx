import React, { useState } from "react";

const LeaveForm = () => {
  const [formData, setFormData] = useState({
    employee_name: "",
    leave_date: "",
    leave_reason: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.employee_name) {
      newErrors.employee_name = "Employee name is required.";
    }
    if (!formData.leave_date) {
      newErrors.leave_date = "Leave date is required.";
    }
    if (!formData.leave_reason) {
      newErrors.leave_reason = "Leave reason is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    console.log("Leave Request Submitted:", formData);
    setSuccessMessage("Leave request submitted successfully!");
    setFormData({
      employee_name: "",
      leave_date: "",
      leave_reason: "",
    });
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-6 col-sm-6 card shadow">
          <h4
            className="text-center text-uppercase mt-4 fw-bold"
            style={{ color: "#49266a" }}
          >
            Leave Application Form
          </h4>
          <div className="card-body">
            <label htmlFor="employee-name" className="form-label">
              Employee Name:
            </label>
            <input
              id="employee-name"
              type="text"
              value={formData.employee_name}
              name="employee_name"
              onChange={handleChange}
              placeholder="Enter employee name"
              className={`form-control mb-0 ${
                errors.employee_name ? "is-invalid" : ""
              }`}
            />
            {errors.employee_name && (
              <div className="small text-danger mt-1">
                {errors.employee_name}
              </div>
            )}

            <label htmlFor="leave-date" className="form-label mt-4">
              Leave Date:
            </label>
            <input
              id="leave-date"
              type="date"
              value={formData.leave_date}
              name="leave_date"
              onChange={handleChange}
              className={`form-control mb-0 ${
                errors.leave_date ? "is-invalid" : ""
              }`}
            />
            {errors.leave_date && (
              <div className="small text-danger mt-1">{errors.leave_date}</div>
            )}

            <label htmlFor="leave-reason" className="form-label mt-4">
              Leave Reason:
            </label>
            <textarea
              id="leave-reason"
              value={formData.leave_reason}
              name="leave_reason"
              onChange={handleChange}
              placeholder="Enter leave reason"
              className={`form-control mb-0 ${
                errors.leave_reason ? "is-invalid" : ""
              }`}
            />
            {errors.leave_reason && (
              <div className="small text-danger my-1">
                {errors.leave_reason}
              </div>
            )}

            <div className="d-flex justify-content-center">
              <button
                onClick={handleSubmit}
                className="btn w-50 text-white shadow-sm fw-bold my-3"
                style={{
                  backgroundColor: "#49266a",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </div>
          </div>

          {successMessage && (
            <div
              className="alert alert-light"
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaveForm;
