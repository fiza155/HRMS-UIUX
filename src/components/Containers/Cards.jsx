import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import CountUp from "react-countup";
import "./Cards.Module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const JobOverviewCard = () => {
  const data = {
    labels: ["Active Jobs", "Inreview Jobs", "Finished Jobs"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#007bff", "#ffc107", "#6610f2"],
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
    <Card
      className="text-center shadow py-2  d-flex justify-content-center align-content-center"
      style={{
        height: "clamp(140px, 30vw, 180px)",
        backgroundColor: "#f0e0f5",
      }}
    >
      <Row className="gx-2 align-items-center px-2">
        <Col xs={7} md={7} className=" ">
          <h6 className="text-center fw-bold pt-lg-2 card-title">
            Job Overview
          </h6>
          <div
            style={{
              position: "relative",

              maxWidth: "clamp(160px, 25vw, 180px)",
              height: "clamp(80px, 15vw, 100px)",
              // maxWidth: "180px",
              // height: "100px",
              margin: "0 auto",
            }}
          >
            <Doughnut data={data} options={options} />
            <div
              style={{
                position: "absolute",
                top: "54%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#333",
                fontSize: "clamp(10px, 1vw, 12px)",
              }}
            >
              <h3 className="fw-bold m-0 p-0 ">100</h3>
              <p className="small m-0 p-0 ">Total Jobs</p>
            </div>
          </div>
        </Col>
        <Col
          xs={5}
          md={5}
          className="text-start  small p-0 m-0 "
          style={{
            fontSize: "clamp(14px, 1vw, 14px)",
            position: "relative",
            top: "15%",
          }}
        >
          <div>
            <small>
              <b style={{ color: "#007bff" }}>60</b> Active Jobs
            </small>
            <br />
            <small>
              <b style={{ color: "#ffc107" }}>30</b> Inreview Jobs
            </small>
            <br />
            <small>
              <b style={{ color: "#6610f2" }}>10</b> Finished Jobs
            </small>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

const Cards = () => {
  const cards = [
    {
      title: "Active Employees",
      value: 200,
      description: "Active Employees",
    },
    {
      title: "Performance Analytics",
      value: 4.1,
      description: "Avg Performance Score",
      decimals: 1,
    },
    {
      title: "Overall Payroll Details",
      value: 20,
      description: "Total Salary Count",
      suffix: "M",
    },
    {
      isCustom: true,
    },
  ];

  return (
    <Container fluid className="py-2">
      <Row className="gy-2 gx-2">
        {cards.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={3}>
            {card.isCustom ? (
              <JobOverviewCard />
            ) : (
              <Card
                className="text-center px-3 py-3 shadow d-flex justify-content-center align-content-center"
                style={{
                  backgroundColor: "#f0e0f5",
                  height: "clamp(140px, 30vw, 180px)",
                }}
              >
                <h6 className="fw-bold card-title">{card.title}</h6>
                <h2 className="my-2 fw-bold card-value">
                  <CountUp
                    end={card.value}
                    duration={2}
                    decimals={card.decimals || 0}
                    prefix={card.prefix || ""}
                    suffix={card.suffix || ""}
                  />
                </h2>
                <small className="text-muted card-description">
                  {card.description}
                </small>
              </Card>
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
