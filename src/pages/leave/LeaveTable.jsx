import React, { useState } from "react";

const LeaveTable = () => {
  const [leaves, setLeaves] = useState([
    {
      employee_name: "Employee 1",
      leave_date: "2024-12-01",
      reason: "Medical leave.",
    },
    {
      employee_name: "Employee 2",
      leave_date: "2024-12-10",
      reason: "Personal leave.",
    },
    {
      employee_name: "Employee 3",
      leave_date: "2024-12-15",
      reason: "Vacation.",
    },
  ]);

  const [showDeletePage, setShowDeletePage] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleDeleteClick = (index) => {
    setDeleteIndex(index);
    setShowDeletePage(true);
  };

  const handleDeleteLeave = () => {
    const updatedLeaves = leaves.filter((_, i) => i !== deleteIndex);
    setLeaves(updatedLeaves);
    handleCloseDeletePage();
  };
  const handleCloseDeletePage = () => {
    setShowDeletePage(false);
    setDeleteIndex(null);
  };
  const [viewLeave, setViewLeave] = useState(null);

  const handleViewClick = (leave) => {
    setViewLeave(leave);
  };

  const handleCloseView = () => {
    setViewLeave(null);
  };

  if (showDeletePage) {
    return (
      <div className="modal show d-block vh-100" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header custom-header">
              <h5 className="modal-title">Confirm Delete</h5>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this leave record?</p>
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
                onClick={handleDeleteLeave}
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
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title text-center mb-3 fw-bold">
            Employee Leaves
          </h4>
          <div className="table-responsive">
            {leaves.length === 0 ? (
              <div className="alert alert-warning" role="alert">
                No leave records found.
              </div>
            ) : (
              <table className="table table-bordered table-striped align-middle">
                <thead
                  className="text-white"
                  style={{ backgroundColor: "#49266a" }}
                >
                  <tr>
                    <th>Employee Name</th>
                    <th>Leave Date</th>
                    <th>Leave Reason</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {leaves.map((leave, index) => (
                    <tr key={index}>
                      <td>{leave.employee_name}</td>
                      <td>{leave.leave_date}</td>
                      <td>{leave.reason}</td>
                      <td>
                        <div className="d-flex">
                          <button
                            onClick={() => handleViewClick(leave)}
                            className="btn text-white btn-sm rounded-3 me-2"
                            style={{ backgroundColor: "#49266a" }}
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleDeleteClick(index)}
                            className="btn btn-danger btn-sm rounded-3"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {viewLeave && (
        <div className="modal show d-block vh-100" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div
                className="modal-header text-white  text-center"
                style={{ backgroundColor: "#49266a", justifyContent: "center" }}
              >
                <h5 className="modal-title  flex-grow-1 text-center">
                  Leave Details
                </h5>
                <button
                  type="button"
                  className="btn btn-close  btn-close-white "
                  onClick={handleCloseView}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Employee Name:</strong> {viewLeave.employee_name}
                </p>
                <p>
                  <strong>Leave Date:</strong> {viewLeave.leave_date}
                </p>
                <p>
                  <strong>Reason:</strong> {viewLeave.reason}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={handleCloseView}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaveTable;
