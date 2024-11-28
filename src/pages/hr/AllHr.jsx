import React, { useState } from "react";

const AllHR = () => {
  const [allHRS, setAllHRS] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      status: "pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "approved",
    },
    {
      id: 3,
      name: "Jane",
      email: "jane.smith@example.com",
      status: "approved",
    },
  ]);
  const [showDeletePage, setShowDeletePage] = useState(false); // Tracks if the delete page is shown
  const [deleteHRId, setDeleteHRId] = useState(null); // Stores the ID of the HR to delete

  const handleUpdateStatus = (id, status) => {
    setAllHRS((prev) =>
      prev.map((hr) => (hr.id === id ? { ...hr, status } : hr))
    );
  };

  const handleShowDeletePage = (id) => {
    setDeleteHRId(id);
    setShowDeletePage(true);
  };

  const handleCloseDeletePage = () => {
    setShowDeletePage(false);
    setDeleteHRId(null);
  };

  const handleDeleteHR = () => {
    setAllHRS((prev) => prev.filter((hr) => hr.id !== deleteHRId));
    setShowDeletePage(false);
    setDeleteHRId(null);
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
              <p>Are you sure you want to delete this HR?</p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary rounded-3"
                onClick={handleCloseDeletePage}
              >
                No
              </button>
              <button
                className="btn btn-danger rounded-3"
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
    <div className="container mt-4">
      <div className="card card-body shadow ">
        <h4
          className="card-title mb-3 text-center fw-bold"
          style={{ color: "#49266a" }}
        >
          All HR Details
        </h4>

        {allHRS.length === 0 ? (
          <div className="alert alert-warning" role="alert">
            No HR records found.
          </div>
        ) : (
          <div className="table-responsive ">
            <table className="table table-striped table-bordered table-sm">
              <thead className="">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allHRS.map((hr) => (
                  <tr key={hr.id}>
                    <td>{hr.name}</td>
                    <td>{hr.email}</td>
                    <td>
                      <span
                        className={`badge ${
                          hr.status === "approved"
                            ? "bg-success"
                            : hr.status === "pending"
                            ? "bg-warning"
                            : "bg-secondary"
                        }`}
                      >
                        {hr.status.charAt(0).toUpperCase() + hr.status.slice(1)}
                      </span>
                    </td>
                    <td>
                      <button
                        onClick={() => handleUpdateStatus(hr.id, "approved")}
                        className="btn btn-success btn-sm me-2 rounded-3"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(hr.id, "pending")}
                        className="btn btn-warning btn-sm me-2 rounded-3"
                      >
                        Pending
                      </button>
                      <button
                        onClick={() => handleShowDeletePage(hr.id)}
                        className="btn btn-danger btn-sm rounded-3"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllHR;
