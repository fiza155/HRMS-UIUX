import React, { useState } from "react";
import "./CompensationChart.css";
import {
  BarChart,
  Rectangle,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const employees = [
  {
    name: "John Doe",
    data: [
      { name: "Jan", BasicSalary: 50000, Bonus: 10000 },
      { name: "Feb", BasicSalary: 52000, Bonus: 12000 },
      { name: "Mar", BasicSalary: 35000, Bonus: 15000 },
      { name: "Apr", BasicSalary: 58000, Bonus: 13000 },
      { name: "May", BasicSalary: 70000, Bonus: 14000 },
      { name: "Jun", BasicSalary: 62000, Bonus: 11000 },
      { name: "Jul", BasicSalary: 64000, Bonus: 12000 },
      { name: "Aug", BasicSalary: 66000, Bonus: 10000 },
      { name: "Sep", BasicSalary: 68000, Bonus: 15000 },
      { name: "Oct", BasicSalary: 70000, Bonus: 14000 },
      { name: "Nov", BasicSalary: 72000, Bonus: 16000 },
      { name: "Dec", BasicSalary: 75000, Bonus: 17000 },
    ],
  },
  {
    name: "Jane Smith",
    data: [
      { name: "Jan", BasicSalary: 48000, Bonus: 8000 },
      { name: "Feb", BasicSalary: 50000, Bonus: 10000 },
      { name: "Mar", BasicSalary: 53000, Bonus: 12000 },
      { name: "Apr", BasicSalary: 56000, Bonus: 11000 },
      { name: "May", BasicSalary: 59000, Bonus: 10000 },
      { name: "Jun", BasicSalary: 61000, Bonus: 9000 },
      { name: "Jul", BasicSalary: 63000, Bonus: 11000 },
      { name: "Aug", BasicSalary: 65000, Bonus: 12000 },
      { name: "Sep", BasicSalary: 67000, Bonus: 14000 },
      { name: "Oct", BasicSalary: 69000, Bonus: 15000 },
      { name: "Nov", BasicSalary: 71000, Bonus: 16000 },
      { name: "Dec", BasicSalary: 73000, Bonus: 17000 },
    ],
  },
];

const CompensationChart = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);

  const handleEmployeeChange = (e) => {
    const employee = employees.find((emp) => emp.name === e.target.value);
    setSelectedEmployee(employee);
  };

  return (
    <div className="dashboard-chart-container ">
      <h2 className="chart-title">Employee Monthly Compensation</h2>

      {/* Employee Selector */}
      <div className="employee-selector">
        <label htmlFor="employee">Select Employee: </label>
        <select
          id="employee"
          onChange={handleEmployeeChange}
          value={selectedEmployee.name}
        >
          {employees.map((employee) => (
            <option key={employee.name} value={employee.name}>
              {employee.name}
            </option>
          ))}
        </select>
      </div>

      {/* Bar Chart */}
      <ResponsiveContainer width="98%" height={350}>
        <BarChart
          data={selectedEmployee.data}
          margin={{
            top: 10,
            right: 10,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            label={{
              position: "insideBottom",
              offset: -5,
            }}
          />
          <YAxis
            tickFormatter={(value) => `${value.toLocaleString()}`}
            ticks={[0, 2500, 5000, 10000, 15000, 25000, 35000, 50000, 75000]}
            label={{
              value: "Salary (PKR)",
              angle: -90,
              position: "insideLeft",
              dx: -18,
            }}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="BasicSalary"
            name="Basic Salary"
            fill="#6c3483"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />

          <Bar
            dataKey="Bonus"
            name="Bonus"
            fill="#9777d2"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompensationChart;
