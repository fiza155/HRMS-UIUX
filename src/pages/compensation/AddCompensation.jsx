import React, { useState } from "react";

const AddCompensation = () => {
  const [formData, setFormData] = useState({
    employee: "",
    baseSalary: "",
    bonus: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Handler to clear the form
  const handleClear = () => {
    setFormData({
      employee: "",
      baseSalary: "",
      bonus: "",
    });
  };

  // Handler for input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Compensation Data:", formData);

    // Display success message
    setSuccessMessage("Compensation added successfully!");

    // Clear the form
    handleClear();

    // Remove the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 6000);
  };

  return (
    <div className="d-flex container mt-5 justify-content-center align-items-center">
      <div className="col-lg-10 col-md-10 col-sm-8 card shadow-lg p-4 pb-5">
        <h4
          className="text-center text-uppercase fw-bold "
          style={{ color: "#49266a" }}
        >
          Add Compensation
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="employeeSelect" className="form-label">
              Select Employee
            </label>
            <select
              id="employeeSelect"
              name="employee"
              className="form-select"
              value={formData.employee}
              onChange={handleChange}
            >
              <option value="">-- Select Employee --</option>
              <option value="1">Employee 1</option>
              <option value="2">John Doe</option>
              <option value="3">Jane Smith</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="baseSalary" className="form-label">
              Base Salary
            </label>
            <input
              type="number"
              id="baseSalary"
              name="baseSalary"
              className="form-control"
              placeholder="Enter Base Salary"
              value={formData.baseSalary}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="bonus" className="form-label">
              Bonus
            </label>
            <input
              type="number"
              id="bonus"
              name="bonus"
              className="form-control"
              placeholder="Enter Bonus"
              value={formData.bonus}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClear}
            >
              Clear
            </button>

            <button
              className="btn text-white shadow"
              style={{
                backgroundColor: "#49266a",
                cursor: "pointer",
              }}
              type="submit"
            >
              Add Compensation
            </button>
          </div>
        </form>
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
  );
};

export default AddCompensation;
