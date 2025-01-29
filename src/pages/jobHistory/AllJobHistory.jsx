import React, { useState } from "react";

const JobHistory = () => {
  const [jobHistory, setJobHistory] = useState([
    {
      id: 1,
      employee: { first_name: "John", last_name: "Doe" },
      department: { title: "HR" },
      position: { job_position: "Manager" },
      status: "Active",
      employment_from: "2025-01-01",
    },
    {
      id: 2,
      employee: { first_name: "Jane", last_name: "Smith" },
      department: { title: "IT" },
      position: { job_position: "Developer" },
      status: "Resigned",
      employment_from: "2025-06-15",
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editJob, setEditJob] = useState({
    employee: { first_name: "", last_name: "" },
    department: { title: "" },
    position: { job_position: "" },
    status: "",
    employment_from: "",
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditJob({ ...jobHistory[index] });
  };

  const handleSaveClick = () => {
    const updatedJobHistory = [...jobHistory];
    updatedJobHistory[editIndex] = editJob;
    setJobHistory(updatedJobHistory);
    setEditIndex(null);
  };

  const handleDeleteClick = (index) => {
    setDeleteIndex(index);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    const updatedJobHistory = jobHistory.filter((_, i) => i !== deleteIndex);
    setJobHistory(updatedJobHistory);
    setShowDeleteModal(false);
    setDeleteIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditJob((prev) => {
      const keys = name.split(".");
      if (keys.length === 2) {
        return {
          ...prev,
          [keys[0]]: { ...prev[keys[0]], [keys[1]]: value },
        };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false);
    setDeleteIndex(null);
  };

  if (showDeleteModal) {
    return (
      <div className="modal show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header custom-header">
              <h5 className="modal-title">Confirm Delete</h5>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this job history record?</p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary rounded-3 btn-sm"
                onClick={handleCloseModal}
              >
                No
              </button>
              <button
                className="btn btn-danger rounded-3 btn-sm"
                onClick={handleDeleteConfirm}
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
      {jobHistory.length === 0 ? (
        <div className="alert alert-warning" role="alert">
          No job history records found.
        </div>
      ) : (
        <div className="card shadow">
          <div className="card-body">
            <h4 className="card-title text-center mb-3 fw-bold text-uppercase">
              Job History
            </h4>
            <div className="table-responsive">
              <table className="table table-bordered table-striped align-middle">
                <thead
                  className="text-white"
                  style={{ backgroundColor: "#49266a" }}
                >
                  <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Position</th>
                    <th>Status</th>
                    <th>Employment From</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobHistory.map((job, index) => (
                    <tr key={index}>
                      {editIndex === index ? (
                        <>
                          <td>
                            <input
                              type="text"
                              name="employee.first_name"
                              value={editJob.employee.first_name}
                              onChange={handleInputChange}
                              className="form-control form-control-sm mb-1"
                              placeholder="First Name"
                            />
                            <input
                              type="text"
                              name="employee.last_name"
                              value={editJob.employee.last_name}
                              onChange={handleInputChange}
                              className="form-control form-control-sm"
                              placeholder="Last Name"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="department.title"
                              value={editJob.department.title}
                              onChange={handleInputChange}
                              className="form-control form-control-sm"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="position.job_position"
                              value={editJob.position.job_position}
                              onChange={handleInputChange}
                              className="form-control form-control-sm"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="status"
                              value={editJob.status}
                              onChange={handleInputChange}
                              className="form-control form-control-sm"
                            />
                          </td>
                          <td>
                            <input
                              type="date"
                              name="employment_from"
                              value={editJob.employment_from}
                              onChange={handleInputChange}
                              className="form-control form-control-sm"
                            />
                          </td>
                          <td>
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
                          </td>
                        </>
                      ) : (
                        <>
                          <td>
                            {job.employee.first_name} {job.employee.last_name}
                          </td>
                          <td>{job.department.title}</td>
                          <td>{job.position.job_position}</td>
                          <td>{job.status}</td>
                          <td>{job.employment_from}</td>
                          <td>
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

export default JobHistory;
