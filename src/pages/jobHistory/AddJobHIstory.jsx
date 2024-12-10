import React, { useState } from "react";

const AddJobHistory = () => {
  const [employees] = useState([
    {
      id: "1",
      first_name: "John",
      last_name: "Doe",
      status: "Active",
      date_of_joining: "2022-01-01",
    },
    {
      id: "2",
      first_name: "Jane",
      last_name: "Smith",
      status: "Inactive",
      date_of_joining: "2023-05-15",
    },
  ]);

  const [departments] = useState([
    { id: "1", title: "Finance" },
    { id: "2", title: "Engineering" },
  ]);

  const [positions] = useState([
    { id: "1", job_position: "Manager" },
    { id: "2", job_position: "Developer" },
  ]);

  const [formData, setFormData] = useState({
    employee: "",
    department: "",
    position: "",
    status: "",
    joiningDate: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "employee") {
      const selectedEmployee = employees.find((emp) => emp.id === value);
      if (selectedEmployee) {
        setFormData((prev) => ({
          ...prev,
          status: selectedEmployee.status,
          joiningDate: selectedEmployee.date_of_joining,
        }));
      }
    }
  };

  const handleClear = () => {
    setFormData({
      employee: "",
      department: "",
      position: "",
      status: "",
      joiningDate: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { employee, department, position, status, joiningDate } = formData;
    if (!employee || !department || !position || !status || !joiningDate) {
      setSuccessMessage("All fields are required.");
      return;
    }

    console.log("Job History Data:", formData);

    setSuccessMessage("Job History added successfully!");
    handleClear();

    setTimeout(() => {
      setSuccessMessage("");
    }, 6000);
  };

  return (
    <div className="container my-3 d-flex align-items-center justify-content-center">
      <div className="col-lg-8 col-md-10 col-sm-10 card shadow-lg p-3">
        <h4
          className="text-center text-uppercase fw-bold"
          style={{ color: "#49266a" }}
        >
          Add Job History
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="employee-select" className="form-label">
              Select Employee
            </label>
            <select
              id="employee-select"
              name="employee"
              className="form-select"
              value={formData.employee}
              onChange={handleChange}
            >
              <option value="">-- Select Employee --</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.first_name} {emp.last_name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="department-select" className="form-label">
              Select Department
            </label>
            <select
              id="department-select"
              name="department"
              className="form-select"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="">-- Select Department --</option>
              {departments.map((dep) => (
                <option key={dep.id} value={dep.id}>
                  {dep.title}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="position-select" className="form-label">
              Select Position
            </label>
            <select
              id="position-select"
              name="position"
              className="form-select"
              value={formData.position}
              onChange={handleChange}
            >
              <option value="">-- Select Position --</option>
              {positions.map((pos) => (
                <option key={pos.id} value={pos.id}>
                  {pos.job_position}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="status-input" className="form-label">
              Employee Status
            </label>
            <input
              type="text"
              id="status-input"
              name="status"
              className="form-control"
              value={formData.status}
              onChange={handleChange}
              placeholder="Enter status"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="joining-date-input" className="form-label">
              Joining Date
            </label>
            <input
              type="date"
              id="joining-date-input"
              name="joiningDate"
              className="form-control"
              value={formData.joiningDate}
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
              type="submit"
              className="btn text-white shadow"
              style={{
                backgroundColor: "#49266a",
                cursor: "pointer",
              }}
            >
              Add Job History
            </button>
          </div>
        </form>
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
  );
};

export default AddJobHistory;