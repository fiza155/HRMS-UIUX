import React, { useState } from "react";
 
const AddCompensation = () => {
  const [formData, setFormData] = useState({
    employee: "",
    baseSalary: "",
    bonus: "",
  });

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

  return (
    <div className="container mt-5 w-75 ">
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-4">Add Compensation</h3>
        <form>
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
    </div>
  );
};

export default AddCompensation;
