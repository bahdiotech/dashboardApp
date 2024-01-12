import React from "react";
import'./Chart.css';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const data = [
    {
      name: "Jan",
      expenses: 5000,
      return: 2900,
      total: 12000,
    },
    {
      name: "Feb",
      expenses: 7000,
      return: 900,
      total: 13000,
    },
    {
      name: "Mar",
      expenses: 1200,
      return: 6000,
      total: 25300,
    },
    {
      name: "Apr",
      expenses: 9200,
      return: 900,
      total: 17780,
    },
    {
      name: "May",
      expenses: 12000,
      return: 5000,
      total: 6890,
    },
    {
      name: "Jun",
      expenses: 3900,
      return: 2100,
      total: 10390,
    },
    {
      name: "Jul",
      expenses: 7300,
      return: 3400,
      total: 30344,
    },
  ];

  return (
    <div className="chartContainer">
    <AreaChart
      width={830}
      height={350}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorRv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#d95087" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#d95087" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="expenses"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="return"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorRv)"
      />
      <Area
        type="monotone"
        dataKey="total"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
    </div>
  );
}
