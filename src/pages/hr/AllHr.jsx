import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import DeleteConfirmationModal from "../../../Components/DelectModel";

export default function AllHR() {
  const [allHRS, setAllHRS] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      status: "approved",
    },
    { id: 2, name: "Bob Smith", email: "bob@example.com", status: "pending" },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@example.com",
      status: "blocked",
    },
  ]);

  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [deleteHRId, setDeleteHRId] = useState(null);

  const handleUpdateStatus = (id, status) => {
    setAllHRS((prevHRS) =>
      prevHRS.map((hr) => (hr.id === id ? { ...hr, status } : hr))
    );
    toast.success(`HR status updated to ${status}`);
  };

  const handleShowDeletePage = (id) => {
    setDeleteHRId(id);
    setIsDeleteModalVisible(true);
  };

  // const handleDeleteCancel = () => {
  //   setIsDeleteModalVisible(false);
  //   setDeleteHRId(null);
  // };

  // const handleDeleteHR = () => {
  //   if (!deleteHRId) return;
  //   setAllHRS((prevHRS) => prevHRS.filter((hr) => hr.id !== deleteHRId));
  //   toast.success("HR deleted successfully");
  //   setIsDeleteModalVisible(false);
  // };

  return (
    <div className="container mt-4">
      <div className="card card-body shadow">
        <h4
          className="card-title mb-3 text-center fw-bold"
          style={{ color: "#49266a" }}
        >
          All HR Details
        </h4>

        {allHRS.length === 0 ? (
          <div className="alert alert-warning">No HR records found.</div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
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
                      {hr.status === "pending" && (
                        <button
                          onClick={() => handleUpdateStatus(hr.id, "approved")}
                          className="btn btn-warning btn-sm me-2"
                        >
                          Approve
                        </button>
                      )}
                      {hr.status === "approved" && (
                        <button
                          onClick={() => handleUpdateStatus(hr.id, "blocked")}
                          className="btn btn-warning btn-sm me-2"
                        >
                          Lock
                        </button>
                      )}
                      {hr.status === "blocked" && (
                        <button
                          onClick={() => handleUpdateStatus(hr.id, "approved")}
                          className="btn btn-warning btn-sm me-2"
                        >
                          Unlock
                        </button>
                      )}
                      <button
                        onClick={() => handleShowDeletePage(hr.id)}
                        className="btn btn-danger btn-sm"
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

      {/* <DeleteConfirmationModal
        isVisible={isDeleteModalVisible}
        onCancel={handleDeleteCancel}
        onConfirm={handleDeleteHR}
      /> */}

      <ToastContainer />
    </div>
  );
}
