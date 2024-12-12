// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import Chart from "react-apexcharts"; // ApexCharts library
// import CountUp from "react-countup"; // CountUp library for animated counters

// // JobOverviewCard Component
// // const JobOverviewCard = () => {
// //   const chartOptions = {
// //     chart: {
// //       type: "radialBar",
// //       height: 200,
// //     },
// //     plotOptions: {
// //       radialBar: {
// //         startAngle: -90,
// //         endAngle: 90, // Semi-circle effect
// //         hollow: {
// //           size: "60%", // Size of the hollow part (center)
// //         },
// //         track: {
// //           background: "#e7e7e7", // Track background color
// //           strokeWidth: "97%", // Width of the track
// //         },
// //         dataLabels: {
// //           name: {
// //             show: false, // Hide category names inside the chart
// //           },
// //           value: {
// //             fontSize: "24px",
// //             fontWeight: "bold",
// //             color: "#333", // Color for the value
// //             offsetY: -10,
// //           },
// //           total: {
// //             show: true,
// //             label: "Total Jobs",
// //             fontSize: "16px",
// //             color: "#666",
// //             formatter: () => "180", // Static value for Total Jobs
// //           },
// //         },
// //       },
// //     },
// //     colors: ["#007bff", "#ffc107", "#6610f2"], // Blue, Yellow, Purple
// //     labels: ["Active Jobs", "In-review Jobs", "Finished Jobs"], // Labels for each section
// //   };

// //   const chartSeries = [100, 50, 30]; // Data for the chart (percentage values)

// //   return (
// //     <Card className="text-center  shadow">
// //       <Row className="align-items-center">
// //         {/* Chart on the left */}
// //         <Col md={8}>
// //           <Chart
// //             options={chartOptions}
// //             series={chartSeries}
// //             type="radialBar"
// //             height={200}
// //           />
// //         </Col>
// //         {/* Job details on the right */}
// //         <Col md={6} className="text-start px-3">
// //           <h6 className="fw-bold">Jobs Overview</h6>
// //           <div>
// //             <small>
// //               <b style={{ color: "#007bff" }}>100</b> Active Jobs
// //             </small>
// //             <br />
// //             <small>
// //               <b style={{ color: "#ffc107" }}>50</b> In-review Jobs
// //             </small>
// //             <br />
// //             <small>
// //               <b style={{ color: "#6610f2" }}>30</b> Finished Jobs
// //             </small>
// //           </div>
// //         </Col>
// //       </Row>
// //     </Card>
// //   );
// // };
// // JobOverviewCard Component
// const JobOverviewCard = () => {
//   const chartOptions = {
//     chart: {
//       type: "radialBar",
//       height: 200,
//     },
//     plotOptions: {
//       radialBar: {
//         startAngle: -90,
//         endAngle: 90, // Semi-circle effect
//         hollow: {
//           size: "60%", // Size of the hollow part (center)
//         },
//         track: {
//           background: "#e7e7e7", // Track background color
//           strokeWidth: "97%", // Width of the track
//         },
//         dataLabels: {
//           name: {
//             show: false, // Hide category names inside the chart
//           },
//           value: {
//             fontSize: "24px",
//             fontWeight: "bold",
//             color: "#333", // Color for the value
//             offsetY: -10,
//           },
//           total: {
//             show: true,
//             label: "Total Jobs",
//             fontSize: "16px",
//             color: "#666",
//             formatter: () => "180", // Static value for Total Jobs
//           },
//         },
//       },
//     },
//     colors: ["#007bff", "#ffc107", "#6610f2"], // Blue, Yellow, Purple
//     labels: ["Active Jobs", "In-review Jobs", "Finished Jobs"], // Labels for each section
//   };

//   // Combine the values into one chart series
//   const chartSeries = [100, 50, 30]; // Data for the chart (percentage values)

//   return (
//     <Card className="text-center shadow">
//       <Row className="align-items-center">
//         {/* Chart on the left */}
//         <Col md={8}>
//           <Chart
//             options={chartOptions}
//             series={chartSeries}
//             type="radialBar"
//             height={200}
//           />
//         </Col>
//         {/* Job details on the right */}
//         <Col md={6} className="text-start px-3">
//           <h6 className="fw-bold">Jobs Overview</h6>
//           <div>
//             <small>
//               <b style={{ color: "#007bff" }}>100</b> Active Jobs
//             </small>
//             <br />
//             <small>
//               <b style={{ color: "#ffc107" }}>50</b> In-review Jobs
//             </small>
//             <br />
//             <small>
//               <b style={{ color: "#6610f2" }}>30</b> Finished Jobs
//             </small>
//           </div>
//         </Col>
//       </Row>
//     </Card>
//   );
// };

// // Cards Component
// const Cards = () => {
//   const cards = [
//     {
//       title: "Active Employees",
//       value: 200,
//       description: "Active Employees",
//     },
//     {
//       title: "Performance Analytics",
//       value: 4.1,
//       description: "Avg Performance Score",
//       decimals: 1,
//     },
//     {
//       isCustom: true, // Custom Job Overview card (widget style)
//     },
//     {
//       title: "All-Inclusive Payroll Details",
//       value: 20,
//       description: "Total Salary Count",
//       suffix: "M",
//     },
//   ];

//   return (
//     <Container fluid className=" py-3">
//       <Row className="gy-4 gx-2">
//         {cards.map((card, index) => (
//           <Col key={index} md={3}>
//             {card.isCustom ? (
//               <JobOverviewCard /> // Render the custom Job Overview card
//             ) : (
//               <Card
//                 className="text-center p-3 shadow"
//                 style={{ backgroundColor: "#f8f9fa" }}
//               >
//                 <h6 className="fw-bold">{card.title}</h6>
//                 <h2 className="my-2">
//                   <CountUp
//                     end={card.value}
//                     duration={2}
//                     decimals={card.decimals || 0}
//                     prefix={card.prefix || ""}
//                     suffix={card.suffix || ""}
//                   />
//                 </h2>
//                 <small className="text-muted">{card.description}</small>
//               </Card>
//             )}
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Cards;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import CountUp from "react-countup";
import "./Cards.css";
ChartJS.register(ArcElement, Tooltip, Legend);

// JobOverviewCard Component
// JobOverviewCard Component
const JobOverviewCard = () => {
  const data = {
    labels: ["Active Jobs", "In-review Jobs", "Finished Jobs"],
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
      className="text-center shadow"
      style={{
        height: "160px",
        backgroundColor: "#f0e0f5",
      }}
    >
      <Row className="gx-2 align-items-center px-2">
        <Col md={7}>
          <h6 className="text-center m-0 fw-bold pt-3">Jobs Overview</h6>
          <div
            className="semichart-container mb-3"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "160px",
                height: "160px",
                padding: "4px",
              }}
            >
              <Doughnut data={data} options={options} />
            </div>
            <div className="total-jobs-label">
              <h3 className="fw-bold m-0 p-0">100</h3>
              <p className="small m-0 p-0">Total Jobs</p>
            </div>
          </div>
        </Col>
        <Col md={5} className="text-start m-0 small job-description">
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

// Cards Component
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
      title: "All-Inclusive Payroll Details",
      value: 20,
      description: "Total Salary Count",
      suffix: "M",
    },
    {
      isCustom: true, // Custom Job Overview card (widget style)
    },
  ];

  return (
    <Container fluid className="py-2">
      <Row className="gy-2 gx-2">
        {cards.map((card, index) => (
          <Col key={index} md={3}>
            {card.isCustom ? (
              <JobOverviewCard />
            ) : (
              <Card
                className="text-center px-3 py-4 shadow"
                style={{ backgroundColor: "#f0e0f5", height: "160px" }}
              >
                <h6 className="fw-bold">{card.title}</h6>
                <h2 className="my-2 fw-bold">
                  <CountUp
                    end={card.value}
                    duration={2}
                    decimals={card.decimals || 0}
                    prefix={card.prefix || ""}
                    suffix={card.suffix || ""}
                  />
                </h2>
                <small className="text-muted">{card.description}</small>
              </Card>
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
