import React, { useState } from "react";

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    employee_name: "",
    complaint_date: "",
    description: "",
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
    if (!formData.complaint_date) {
      newErrors.complaint_date = "Date is required.";
    }
    if (!formData.description) {
      newErrors.description = "Complaint description is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    console.log("Complaint Submitted:", formData);
    setSuccessMessage("Complaint submitted successfully!");
    setFormData({
      employee_name: "",
      complaint_date: "",
      description: "",
    });
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  return (
    <div className="container my-4 ">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-6 col-sm-6 card shadow">
          <h4
            className="text-center text-uppercase mt-4 fw-bold"
            style={{ color: "#49266a" }}
          >
            Complaint Form
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

            <label htmlFor="complaint-date" className="form-label mt-4">
              Date:
            </label>
            <input
              id="complaint-date"
              type="date"
              value={formData.complaint_date}
              name="complaint_date"
              onChange={handleChange}
              className={`form-control mb-0 ${
                errors.complaint_date ? "is-invalid" : ""
              }`}
            />
            {errors.complaint_date && (
              <div className="small text-danger mt-1">
                {errors.complaint_date}
              </div>
            )}

            <label htmlFor="description" className="form-label mt-4">
              Complaint Description:
            </label>
            <textarea
              id="description"
              value={formData.description}
              name="description"
              onChange={handleChange}
              placeholder="Enter complaint description"
              className={`form-control mb-0 ${
                errors.description ? "is-invalid" : ""
              }`}
            />
            {errors.description && (
              <div className="small text-danger my-1">{errors.description}</div>
            )}

            <div className="d-flex justify-content-center">
              <button
                onClick={handleSubmit}
                className="btn w-50 text-white shadow-sm fw-bold my-3 "
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

export default ComplaintForm;
