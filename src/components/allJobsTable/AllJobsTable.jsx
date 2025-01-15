import React, { useState } from "react";
import "../employePerformance/EmpPerformanceChart.css";
import "./alljobs.css";

const AllJobsTable = () => {
  const [expandedJobId, setExpandedJobId] = useState(null); // Track expanded job ID

  // Sample job data
  const jobs = [
    {
      id: 1,
      position: "Software Engineer",
      type: "Full-Time",
      postedDate: "12-01-2024",
      lastDate: "24-01-2024",
      details:
        "This is a Software Engineer position. Requires experience in React and Node.js.",
    },
    {
      id: 2,
      position: "SQA Engineer",
      type: "Full-Time",
      postedDate: "02-01-2025",
      lastDate: "20-08-2025",
      details:
        "This is an SQA Engineer position. Requires experience in testing tools like Selenium.",
    },
    {
      id: 3,
      position: "Flutter Developer",
      type: "Full-Time",
      postedDate: "02-01-2025",
      lastDate: "20-08-2025",
      details:
        "This is an SQA Engineer position. Requires experience in testing tools like Selenium.",
    },
    {
      id: 4,
      position: "Frontend Developer",
      type: "Full-Time",
      postedDate: "02-01-2025",
      lastDate: "20-08-2025",
      details:
        "This is an SQA Engineer position. Requires experience in testing tools like Selenium.",
    },
    {
      id: 5,
      position: "SQA Engineer",
      type: "Full-Time",
      postedDate: "02-01-2025",
      lastDate: "20-08-2025",
      details:
        "This is an SQA Engineer position. Requires experience in testing tools like Selenium.",
    },
    {
      id: 6,
      position: "IT Engineer",
      type: "Full-Time",
      postedDate: "02-01-2025",
      lastDate: "20-08-2025",
      details:
        "This is an SQA Engineer position. Requires experience in testing tools like Selenium.",
    },
  ];

  // Toggle the description box for a job
  const toggleJobDetails = (jobId) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  return (
    <div className="jobtable-container container">
      <h2 className="chart-title text-center mb-3">Jobs Application Section</h2>

      <div className="table-container rounded-4 ">
        <table className="small table table-striped table-hover text-center align-middle">
          <thead>
            <tr className="small">
              <th>No:</th>
              <th>Position</th>
              <th>Type</th>
              <th>Posted Date</th>
              <th>Last Date to Apply</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody className="small">
            {jobs.map((job) => (
              <>
                <tr key={job.id}>
                  <td>{job.id}</td>
                  <td>{job.position}</td>
                  <td>{job.type}</td>
                  <td>{job.postedDate}</td>
                  <td>{job.lastDate}</td>
                  <td>
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => toggleJobDetails(job.id)}
                    >
                      <i
                        className={`fas ${
                          expandedJobId === job.id ? "fa-eye-slash" : "fa-eye"
                        }`}
                      ></i>
                    </button>
                  </td>
                </tr>
                {/* Description Row */}
                {expandedJobId === job.id && (
                  <tr>
                    <td colSpan="6">
                      <div className="description-box  rounded-4 p-3">
                        <h4>Job Details</h4>
                        <p>
                          <strong>Position:</strong> {job.position}
                        </p>
                        <p>
                          <strong>Type:</strong> {job.type}
                        </p>
                        <p>
                          <strong>Posted Date:</strong> {job.postedDate}
                        </p>
                        <p>
                          <strong>Last Date to Apply:</strong> {job.lastDate}
                        </p>
                        <p>
                          <strong>Description:</strong> {job.details}
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJobsTable;
