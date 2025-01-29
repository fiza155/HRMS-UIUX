import React, { useState } from "react";

const ComplaintTable = () => {
  const [complaints, setComplaints] = useState([
    {
      name: "Employee 1",
      date: "2024-12-01",
      description: "Late submission of reports.",
    },
    {
      name: "Employee 2",
      date: "2024-12-10",
      description: "Description 2..",
    },
    {
      name: "Employee 3",
      date: "2024-12-15",
      description: "Description 3...",
    },
  ]);

  const [showDeletePage, setShowDeletePage] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleDeleteClick = (index) => {
    setDeleteIndex(index);
    setShowDeletePage(true);
  };

  const handleDeleteComplaint = () => {
    const updatedComplaints = complaints.filter((_, i) => i !== deleteIndex);
    setComplaints(updatedComplaints);
    handleCloseDeletePage();
  };

  const handleCloseDeletePage = () => {
    setShowDeletePage(false);
    setDeleteIndex(null);
  };
  const [viewComplaint, setViewComplaint] = useState(null);

  const handleViewClick = (complaint) => {
    setViewComplaint(complaint);
  };

  const handleCloseView = () => {
    setViewComplaint(null);
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
              <p>Are you sure you want to delete this complaint record?</p>
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
                onClick={handleDeleteComplaint}
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
            Employee Complaints
          </h4>
          <div className="table-responsive">
            {complaints.length === 0 ? (
              <div className="alert alert-warning" role="alert">
                No complaints found.
              </div>
            ) : (
              <table className="table table-bordered table-striped align-middle">
                <thead
                  className="text-white"
                  style={{ backgroundColor: "#49266a" }}
                >
                  <tr>
                    <th>Employee Name</th>
                    <th>Date</th>
                    <th>Complaint Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map((complaint, index) => (
                    <tr key={index}>
                      <td>{complaint.name}</td>
                      <td>{complaint.date}</td>
                      <td>{complaint.description}</td>
                      <td>
                        <div className="d-flex">
                          <button
                            onClick={() => handleViewClick(complaint)}
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

      {viewComplaint && (
        <div className="modal show d-block vh-100" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div
                className="modal-header text-white  text-center"
                style={{ backgroundColor: "#49266a", justifyContent: "center" }}
              >
                <h5 className="modal-title  flex-grow-1 text-center">
                  Complaint Details
                </h5>
                <button
                  type="button"
                  className="btn btn-close  btn-close-white "
                  onClick={handleCloseView}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Employee Name:</strong> {viewComplaint.name}
                </p>
                <p>
                  <strong>Date:</strong> {viewComplaint.date}
                </p>
                <p>
                  <strong>Description:</strong> {viewComplaint.description}
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

export default ComplaintTable;
