import "./chart-component.css";
import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
} from "recharts";
import Tooltip from "./tooltip";

export const chartData = {
  indexData: [
    { time: "09:55", value: 31648 },
    { time: "10:05", value: 31652 },
    { time: "10:15", value: 31654 },
    { time: "10:25", value: 31660 },
    { time: "10:35", value: 31655 },
    { time: "10:45", value: 31658 },
    { time: "11:05", value: 31670 },
    { time: "11:15", value: 31666 },
    { time: "12:00", value: 31668 },
    { time: "13:35", value: 31675 },
  ],
  openPrice: 31648,
};

const generateOpenPriceSeries = (times: string[], openPrice: number) =>
  times.map((time) => ({ time, value: openPrice }));

const ChartComponent: React.FC = () => {
  const { indexData, openPrice } = chartData;
  const openPriceSeries = generateOpenPriceSeries(
    indexData.map((p) => p.time),
    openPrice
  );

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          // The main chart uses indexData for the area
          data={indexData}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          {/* 
            Make sure we have some space below the min data point 
            so the line is clearly visible 
          */}
          <YAxis domain={["dataMin - 5", "auto"]} />

          {/* Use a custom tooltip if desired */}
          <RechartsTooltip content={<Tooltip />} />
          <Legend verticalAlign="top" height={36} />

          {/* 
            Draw the area first so the line is on top 
            (the line is added below, so it draws last) 
          */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="#08548c"
            fill="#08548c"
            fillOpacity={0.2}
            name="EGX30"
          />

          {/* 
            Now draw the open price line 
            - same dataKey="value" but a separate data prop 
            - strokeDasharray for a dashed line if you want it more visible
          */}
          <Line
            type="monotone"
            dataKey="value"
            data={openPriceSeries}
            stroke="yellow"
            strokeWidth={3}
            dot={false}
            strokeDasharray="3 3" // dashed line for better visibility
            name="Open Price"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
