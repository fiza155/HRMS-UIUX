import React, { useState, useEffect } from "react";

export default function DepartmentList() {
  const [departments, setDepartments] = useState([
    { id: 1, title: "HR" },
    { id: 2, title: "Engineering" },
    { id: 3, title: "Marketing" },
  ]);
  const [message, setMessage] = useState("");
  const [editingDepartment, setEditingDepartment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [departmentToDelete, setDepartmentToDelete] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false); // Toggle form visibility
  const [newDepartment, setNewDepartment] = useState({ title: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleEditClick = (department) => {
    setEditingDepartment({ ...department });
  };

  const handleChange = (e) => {
    setEditingDepartment((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSaveChanges = () => {
    setDepartments((prevDepartments) =>
      prevDepartments.map((dept) =>
        dept.id === editingDepartment.id
          ? { ...dept, title: editingDepartment.title }
          : dept
      )
    );
    setEditingDepartment(null);
    setMessage("Department updated successfully.");
  };

  const handleDelete = (departmentId) => {
    setDepartmentToDelete(departmentId);
    setShowModal(true);
  };

  const confirmDelete = () => {
    setDepartments((prevDepartments) =>
      prevDepartments.filter((dept) => dept.id !== departmentToDelete)
    );
    setShowModal(false);
    setMessage("Department deleted successfully.");
  };

  const cancelDelete = () => {
    setShowModal(false);
    setDepartmentToDelete(null);
  };

  const handleInputChange = (e) => {
    setNewDepartment({
      ...newDepartment,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddDepartment = (e) => {
    e.preventDefault();
    if (newDepartment.title.trim()) {
      setDepartments((prev) => [
        ...prev,
        { id: prev.length + 1, title: newDepartment.title },
      ]);
      setMessage("Department added successfully!");
      setNewDepartment({ title: "" });
      setErrors({});
      setShowAddForm(false); // Close the form after adding
    } else {
      setErrors({ title: ["Department title is required."] });
    }
  };

  return (
    <div className="container my-4">
      {message && <div className="text-success fw-bold">{message}</div>}

      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title text-center my-3 fw-bold text-uppercase">
            All Departments
          </h4>

          {/* Add Department Button */}
          <div className="d-flex justify-content-end mb-3">
            <button
              onClick={() => setShowAddForm((prev) => !prev)}
              className="btn text-white b mb-3 "
              style={{ backgroundColor: "#49266a" }}
            >
              {showAddForm ? "Close Add Department Form" : "Add Department"}
            </button>
          </div>

          <div className=" justify-content-end mb-3">
            {showAddForm && (
              <form onSubmit={handleAddDepartment} className="mb-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Department Title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newDepartment.title}
                    onChange={handleInputChange}
                    placeholder="Enter department title"
                    className="form-control shadow "
                  />
                  {errors["title"] && (
                    <p style={{ color: "red" }}>{errors["title"][0]}</p>
                  )}
                </div>
                <div className="d-flex justify-content-end mb-3">
                  <button
                    type="submit"
                    className="btn bg-success-subtle btn-sm shadow-sm rounded px-4"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <thead
                className="text-white"
                style={{ backgroundColor: "#49266a" }}
              >
                <tr>
                  <th>Department Title</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {departments.length > 0 ? (
                  departments.map((department) => (
                    <tr key={department.id}>
                      <td>
                        {editingDepartment?.id === department.id ? (
                          <input
                            type="text"
                            name="title"
                            value={editingDepartment.title ?? ""}
                            onChange={handleChange}
                            className="form-control form-control-sm"
                          />
                        ) : (
                          department.title ?? "N/A"
                        )}
                      </td>
                      <td>
                        {editingDepartment?.id === department.id ? (
                          <>
                            <button
                              onClick={handleSaveChanges}
                              className="btn btn-success btn-sm me-2 rounded-3"
                              style={{ backgroundColor: "#49266a" }}
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setEditingDepartment(null)}
                              className="btn btn-secondary btn-sm rounded-3"
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => handleEditClick(department)}
                              className="btn text-white btn-sm me-2 rounded-3"
                              style={{ backgroundColor: "#49266a" }}
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(department.id)}
                              className="btn btn-danger btn-sm rounded-3"
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="bg-danger-subtle" colSpan="2">
                      No departments available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal fordelete */}
      {showModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)", // White background for modal
            zIndex: 1050,
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header custom-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={cancelDelete}
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this department?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm rounded-3"
                  onClick={cancelDelete}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm rounded-3"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
