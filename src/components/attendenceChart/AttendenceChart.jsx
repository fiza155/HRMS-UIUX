import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./AttendenceChart.css";

const RADIAN = Math.PI / 180;

const renderNeedle = (
  value,
  total,
  cx,
  cy,
  innerRadius,
  outerRadius,
  color
) => {
  const angle = 180 * (1 - value / total);
  const length = (innerRadius + outerRadius) / 2;
  const sin = Math.sin(-RADIAN * angle);
  const cos = Math.cos(-RADIAN * angle);

  const r = 5; // Needle base radius
  const x0 = cx;
  const y0 = cy;
  const x1 = x0 + length * cos;
  const y1 = y0 + length * sin;

  return (
    <>
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />
      <line
        x1={x0}
        y1={y0}
        x2={x1}
        y2={y1}
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </>
  );
};

const GaugeChart = ({ value, label, colors, total = 100 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cx = 150; // Center x-coordinate
  const cy = 150; // Center y-coordinate
  const innerRadius = 70;
  const outerRadius = 120;

  const data = [
    { name: "Current", value: value, color: colors[0] },
    { name: "Remaining", value: total - value, color: colors[1] },
  ];

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={`chart-container hover-container ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h4 className="chart-title">{label}</h4>
      {/* <ResponsiveContainer> */}
      <PieChart width={cx * 2} height={cy * 1.2}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={1}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {renderNeedle(value, total, cx, cy, innerRadius, outerRadius, "#333")}
      </PieChart>
      {/* </ResponsiveContainer> */}
      <h3>{value.toFixed(2)}%</h3>
    </div>
  );
};

const AttendenceChart = () => {
  return (
    <div>
      <ResponsiveContainer>
        <div className="attendence-chart-wrapper  ">
          <GaugeChart
            value={83.01}
            label="Attendance Rate"
            colors={["#6A5ACD", "#E6E6E6"]}
          />
          <GaugeChart
            value={36.99}
            label="Leave Rate"
            colors={["#E91E63", "#E6E6E6"]}
          />
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendenceChart;
