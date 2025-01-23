import React from "react";
import "./EmpPerformanceChart.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "24-12-01", KPI: 200, target: 180 },
  { date: "24-12-02", KPI: 300, target: 260 },
  { date: "24-12-03", KPI: 250, target: 240 },
  { date: "24-12-04", KPI: 400, target: 380 },
];

const EmpPerformanceChart = () => {
  return (
    <div className="performance-chart hover-container">
      <h3 className="chart-title">Performance Review</h3>
      <p className="text-center">
        You have to pay <b style={{ color: "#00c853" }}>12548 USD</b>
      </p>
      <ResponsiveContainer height={265}>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="KPI"
            stroke="#00c853"
            strokeWidth={3}
            name="KPI Score"
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke="#a431ec"
            strokeWidth={2}
            name="Target"
            strokeDasharray="5 5"
          />
          <CartesianGrid stroke="#0000001f" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmpPerformanceChart;
