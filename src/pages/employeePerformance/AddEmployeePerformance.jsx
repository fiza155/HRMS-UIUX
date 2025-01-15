import React, { useState } from "react";

export default function AddEmployeePerformance() {
  const [successMessage, setSuccessMessage] = useState("");
  const [newPR, setNewPR] = useState({
    employee_id: "",
    review_date: "",
    kpi_score: "",
    feedback: "",
  });
  const [errors, setErrors] = useState({});

  const employees = [
    { id: 1, first_name: "John", last_name: "Doe" },
    { id: 2, first_name: "Jane", last_name: "Smith" },
  ];

  const handleChange = (e) => {
    setNewPR((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!newPR.employee_id) {
      newErrors.employee_id = "Employee selection is required.";
    }
    if (!newPR.review_date) {
      newErrors.review_date = "Review date is required.";
    }
    if (!newPR.kpi_score) {
      newErrors.kpi_score = "KPI Score is required.";
    } else if (newPR.kpi_score < 0 || newPR.kpi_score > 100) {
      newErrors.kpi_score = "KPI Score must be between 0 and 100.";
    }
    if (!newPR.feedback) {
      newErrors.feedback = "Feedback is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    console.log("Performance Review Data:", newPR);
    setSuccessMessage("Employee performance added successfully!");
    setNewPR({
      employee_id: "",
      review_date: "",
      kpi_score: "",
      feedback: "",
    });
    setTimeout(() => setSuccessMessage(""), 6000); // Auto-dismiss popup after 6 seconds
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-6 col-sm-6 card  shadow">
          <h4
            className="text-center text-uppercase mt-4 fw-bold"
            style={{ color: "#49266a" }}
          >
            Add Employee Performance
          </h4>
          <div className="card-body">
            <label htmlFor="employee-select" className="form-label">
              Select Employee:
            </label>
            <select
              id="employee-select"
              value={newPR.employee_id}
              name="employee_id"
              onChange={handleChange}
              className={`form-select mb-3 ${
                errors.employee_id ? "is-invalid" : ""
              }`}
            >
              <option value="">Choose an employee</option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.first_name} {employee.last_name}
                </option>
              ))}
            </select>
            {errors.employee_id && (
              <div className="small text-danger">{errors.employee_id}</div>
            )}

            <label htmlFor="date-select" className="form-label">
              Select Date:
            </label>
            <input
              id="date-select"
              type="date"
              value={newPR.review_date}
              name="review_date"
              onChange={handleChange}
              className={`form-control mb-3 ${
                errors.review_date ? "is-invalid" : ""
              }`}
            />
            {errors.review_date && (
              <div className="small text-danger">{errors.review_date}</div>
            )}

            <label htmlFor="kpi-score" className="form-label">
              KPI Score:
            </label>
            <input
              id="kpi-score"
              type="number"
              min="0"
              max="100"
              value={newPR.kpi_score}
              name="kpi_score"
              onChange={handleChange}
              placeholder="Enter KPI Score (0-100)"
              className={`form-control mb-3 ${
                errors.kpi_score ? "is-invalid" : ""
              }`}
            />
            {errors.kpi_score && (
              <div className="small text-danger">{errors.kpi_score}</div>
            )}

            <label htmlFor="feedback" className="form-label">
              Feedback:
            </label>
            <textarea
              id="feedback"
              value={newPR.feedback}
              name="feedback"
              onChange={handleChange}
              placeholder="Enter your feedback"
              className={`form-control mb-3 ${
                errors.feedback ? "is-invalid" : ""
              }`}
            />
            {errors.feedback && (
              <div className="small text-danger">{errors.feedback}</div>
            )}

            <div className="d-flex justify-content-center">
              <button
                onClick={handleSubmit}
                className="btn w-50 text-white shadow-sm fw-bold"
                style={{
                  backgroundColor: "#49266a",
                  cursor: "pointer",
                }}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Success Message Popup */}
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
}
