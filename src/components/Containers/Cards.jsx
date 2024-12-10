import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CountUp from "react-countup";

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
      title: "Workforce Happiness Index",
      value: 3.0,
      description: "Employee Satisfaction Score",
      decimals: 1,
    },
    {
      title: "All-Inclusive Payroll Details",
      value: 20,
      description: "Total Salary Count ",
      suffix: "M",
    },
  ];

  return (
    <Container fluid className="py-3">
      <Row className="gy-4">
        {cards.map((card, index) => (
          <Col key={index} md={3}>
            <Card
              className="text-center p-3 shadow"
              style={{ backgroundColor: "#f0e0f5" }}
            >
              <h6 className="fw-bold ">{card.title}</h6>
              <h2 className="my-2 ">
                <CountUp
                  end={card.value}
                  duration={2} // Animation duration in seconds
                  decimals={card.decimals || 0} // Number of decimal places
                  prefix={card.prefix || ""}
                  suffix={card.suffix || ""}
                />
              </h2>
              <small className="text-muted ">{card.description}</small>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
