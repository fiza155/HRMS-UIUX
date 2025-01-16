import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./PayrollChart.css";

class PayRollChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        legend: {
          position: "bottom",
          horizontalAlign: "center",
          floating: false,
          itemMargin: {
            horizontal: 10,
            vertical: 5,
          },
          labels: {
            colors: undefined, // Dynamically updated
          },
        },
        chart: {
          type: "donut",
        },
        labels: [
          "Frontend Developers",
          "Backend Developers",
          "SQA Engineers",
          "HR Department",
          "Flutter Developers",
        ],
        colors: [
          "#008FFB", // Frontend Developers
          "#49266a", // Backend Developers
          "#FEB019", // SQA Engineers
          "#FF4560", // HR Department
          "#775DD0", // Flutter Developers
        ],
      },
      series: [44, 55, 41, 17, 15], // Chart data
    };
  }

  componentDidMount() {
    this.updateTheme();
    // Listen for theme changes
    document.documentElement.addEventListener("themeChange", this.updateTheme);
  }

  componentWillUnmount() {
    document.documentElement.removeEventListener(
      "themeChange",
      this.updateTheme
    );
  }

  updateTheme = () => {
    const isDarkMode =
      document.documentElement.getAttribute("data-bs-theme") === "dark";
    this.setState((prevState) => ({
      options: {
        ...prevState.options,
        legend: {
          ...prevState.options.legend,
          labels: {
            colors: isDarkMode ? "#ffffff" : "#777", // White for dark mode, black for light mode
          },
        },
      },
    }));
  };

  render() {
    return (
      <div className="Payroll-container">
        <h2 className="chart-title">Payroll Details</h2>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="370"
          height={350}
        />
      </div>
    );
  }
}

export default PayRollChart;
