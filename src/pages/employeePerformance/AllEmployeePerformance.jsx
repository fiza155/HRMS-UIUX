import React, { useState } from "react";

const AllEmployeePerformance = () => {
  const [performances, setPerformances] = useState([
    {
      name: "Employee 1",
      reviewDate: "2024-11-01",
      kpiScore: 85,
      feedback: "Good",
    },
    {
      name: "Employee 2",
      reviewDate: "2024-11-15",
      kpiScore: 90,
      feedback: "Excellent",
    },
    {
      name: "Employee 3",
      reviewDate: "2024-11-20",
      kpiScore: 78,
      feedback: "Needs Improvement",
    },
    {
      name: "Employee 4",
      reviewDate: "2024-11-25",
      kpiScore: 92,
      feedback: "Outstanding",
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editPerformance, setEditPerformance] = useState({
    name: "",
    reviewDate: "",
    kpiScore: 0,
    feedback: "",
  });

  const [showDeletePage, setShowDeletePage] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditPerformance(performances[index]);
  };

  const handleSaveClick = () => {
    const updatedPerformances = [...performances];
    updatedPerformances[editIndex] = editPerformance;
    setPerformances(updatedPerformances);
    setEditIndex(null);
  };

  const handleDeleteClick = (index) => {
    setDeleteIndex(index);
    setShowDeletePage(true);
  };

  const handleDeletePerformance = () => {
    const updatedPerformances = performances.filter(
      (_, i) => i !== deleteIndex
    );
    setPerformances(updatedPerformances);
    handleCloseDeletePage();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditPerformance({ ...editPerformance, [name]: value });
  };

  const handleCloseDeletePage = () => {
    setShowDeletePage(false);
    setDeleteIndex(null);
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
              <p>Are you sure you want to delete this performance record?</p>
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
                onClick={handleDeletePerformance}
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
            Employee Performance
          </h4>
          <div className="table-responsive">
            {performances.length === 0 ? (
              <div className="alert alert-warning" role="alert">
                No Performance records found.
              </div>
            ) : (
              <table className="table table-bordered table-striped align-middle">
                <thead
                  className="text-white"
                  style={{ backgroundColor: "#49266a" }}
                >
                  <tr>
                    <th>Employee Name</th>
                    <th>Review Date</th>
                    <th>KPI Score</th>
                    <th>Feedback</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {performances.map((performance, index) => (
                    <tr key={index}>
                      {editIndex === index ? (
                        <>
                          <td>
                            <input
                              type="text"
                              name="name"
                              value={editPerformance.name}
                              onChange={handleInputChange}
                              className="form-control form-control-sm"
                            />
                          </td>
                          <td>
                            <input
                              type="date"
                              name="reviewDate"
                              value={editPerformance.reviewDate}
                              onChange={handleInputChange}
                              className="form-control form-control-sm"
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              name="kpiScore"
                              value={editPerformance.kpiScore}
                              onChange={handleInputChange}
                              className="form-control form-control-sm"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="feedback"
                              value={editPerformance.feedback}
                              onChange={handleInputChange}
                              className="form-control form-control-sm"
                            />
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
                          <td>{performance.name}</td>
                          <td>{performance.reviewDate}</td>
                          <td>{performance.kpiScore}</td>
                          <td>{performance.feedback}</td>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEmployeePerformance;
