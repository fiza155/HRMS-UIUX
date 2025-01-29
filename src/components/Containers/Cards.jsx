import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import CountUp from "react-countup";
import "./Cards.Module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const JobOverviewCard = () => {
  const data = {
    labels: ["Open Jobs", "Closed Jobs"],
    datasets: [
      {
        data: [60, 30],
        backgroundColor: ["#007bff", "#ffc107"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
    },
    cutout: "88%",
    rotation: -90,
    circumference: 180,
  };

  return (
    <Card className={`text-center shadow py-2 card-container hover-container`}>
      <Row className="gx-2 align-items-center px-2">
        <h6 className="text-center fw-bold pt-lg-2 card-title">Job Overview</h6>
        <Col xs={7} md={7}>
          <div className="doughnut-wrapper">
            <Doughnut data={data} options={options} />
            <div className="doughnut-overlay">
              <h3>100</h3>
              <p>Total Jobs</p>
            </div>
          </div>
        </Col>
        <Col xs={5} md={5} className="text-start job-description ">
          <div>
            <small>
              <b style={{ color: "#007bff" }}>60</b> Active Jobs
            </small>
            <br />
            <small>
              <b style={{ color: "#ffc107" }}>30</b> Closed Jobs
            </small>
            <br />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

const Cards = () => {
  return (
    <Container fluid className="py-2">
      <Row className="gy-2 gx-2 ">
        <Col xs={12} sm={6} md={3}>
          <Card className="text-center px-3 py-3 shadow card-container hover-container">
            <h6 className="fw-bold card-title">Active Employees</h6>
            <h2 className="my-2 fw-bold card-value">
              <CountUp end={200} duration={2} />
            </h2>
            <small className="text-muted card-description">
              Active Employees
            </small>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-center px-3 py-3 shadow card-container  hover-container">
            <h6 className="fw-bold card-title">Performance Analytics</h6>
            <h2 className="my-2 fw-bold card-value">
              <CountUp end={4.1} duration={2} decimals={1} />
            </h2>
            <small className="text-muted card-description">
              Avg Performance Score
            </small>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-center px-3 py-3 shadow card-container hover-container">
            <h6 className="fw-bold card-title">Overall Payroll Details</h6>
            <h2 className="my-2 fw-bold card-value">
              <CountUp end={20} duration={2} suffix="M" />
            </h2>
            <small className="text-muted card-description">
              Total Salary Count
            </small>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <JobOverviewCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
