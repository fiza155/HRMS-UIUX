import React, { useState } from "react";

const Compensation = () => {
  const [employees, setEmployees] = useState([
    { name: "Employee 1", baseSalary: 120, bonus: 120 },
    { name: "Employee 2", baseSalary: 5000, bonus: 5000 },
    { name: "Employee 3", baseSalary: 15000, bonus: 1000 },
    { name: "Employee 4", baseSalary: 2000, bonus: 1000 },
    { name: "Employee 5", baseSalary: 12, bonus: 12 },
    { name: "Employee 6", baseSalary: 2300, bonus: 22 },
    { name: "Employee 7", baseSalary: 2000, bonus: 1000 },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editEmployee, setEditEmployee] = useState({
    name: "",
    baseSalary: 0,
    bonus: 0,
  });

  const [showDeletePage, setShowDeletePage] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null); // Tracks the employee index to delete

  const calculateTotalCompensation = (baseSalary, bonus) => {
    return parseFloat(baseSalary) + parseFloat(bonus);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditEmployee(employees[index]);
  };

  const handleSaveClick = () => {
    const updatedEmployees = [...employees];
    updatedEmployees[editIndex] = editEmployee;
    setEmployees(updatedEmployees);
    setEditIndex(null);
  };

  const handleDeleteClick = (index) => {
    setDeleteIndex(index); // Set the index for the modal
    setShowDeletePage(true); // Show the delete modal
  };

  const handleDeleteHR = () => {
    const updatedEmployees = employees.filter((_, i) => i !== deleteIndex);
    setEmployees(updatedEmployees);
    handleCloseDeletePage(); // Close the modal
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditEmployee({ ...editEmployee, [name]: value });
  };

  const handleCloseDeletePage = () => {
    setShowDeletePage(false);
    setDeleteIndex(null);
  };

  if (showDeletePage) {
    return (
      <div className="modal show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header custom-header">
              <h5 className="modal-title">Confirm Delete</h5>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this employee?</p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary rounded-3 btn-sm"
                onClick={handleCloseDeletePage}
              >
                No
              </button>
              <button
                className="btn btn-danger rounded-3 btn-sm"
                onClick={handleDeleteHR}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-4">
      {employees.length === 0 ? (
        <div className="alert alert-warning" role="alert">
          No Compensation records found.
        </div>
      ) : (
        <div className="card shadow ">
          <div className="card-body ">
            <h4 className="card-title text-center mb-3 fw-bold text-uppercase">
              Employee Compensation
            </h4>
            <div className="table-responsive">
              <table className="table table-bordered table-striped align-middle ">
                <thead
                  className="text-white"
                  style={{ backgroundColor: "#49266a" }}
                >
                  <tr>
                    <th>Employee Name</th>
                    <th>Base Salary</th>
                    <th>Bonus</th>
                    <th>Total Compensation</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={index}>
                      {editIndex === index ? (
                        <>
                          <td>
                            <input
                              type="text"
                              name="name"
                              value={editEmployee.name}
                              onChange={handleInputChange}
                              className="form-control form-control-sm"
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              name="baseSalary"
                              value={editEmployee.baseSalary}
                              onChange={handleInputChange}
                              className="form-control form-control-sm"
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              name="bonus"
                              value={editEmployee.bonus}
                              onChange={handleInputChange}
                              className="form-control form-control-sm"
                            />
                          </td>
                          <td>
                            {calculateTotalCompensation(
                              editEmployee.baseSalary,
                              editEmployee.bonus
                            ).toFixed(2)}
                          </td>
                          <td>
                            <div className="d-flex">
                              <button
                                onClick={handleSaveClick}
                                className="btn btn-success btn-sm me-2"
                              >
                                Save
                              </button>
                              <button
                                onClick={() => setEditIndex(null)}
                                className="btn btn-secondary btn-sm"
                              >
                                Cancel
                              </button>
                            </div>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{employee.name}</td>
                          <td>{parseFloat(employee.baseSalary).toFixed(2)}</td>
                          <td>{parseFloat(employee.bonus).toFixed(2)}</td>
                          <td>
                            {calculateTotalCompensation(
                              parseFloat(employee.baseSalary),
                              parseFloat(employee.bonus)
                            ).toFixed(2)}
                          </td>
                          <td>
                            <div className="d-flex">
                              <button
                                onClick={() => handleEditClick(index)}
                                className="btn text-white btn-sm me-2 rounded-3"
                                style={{ backgroundColor: "#49266a" }}
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteClick(index)}
                                className="btn btn-danger btn-sm rounded-3"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compensation;
