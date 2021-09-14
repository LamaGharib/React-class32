import React from "react";
import { Link } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CityDetails = ({ cityData }) => {
  const data = cityData.list;
  return (
    <div className="city-details">
      <h3>Upcoming 5 days</h3>

      <ResponsiveContainer width="60%" aspect={3}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dt_txt" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            name="temp"
            dataKey="main.temp"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>

      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default CityDetails;
