import React from "react";
import "../style/css/Chart.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Chart = () => {
	const data = [
		{ name: "A", uv: 200, pv: 400, amt: 2400 },
		{ name: "B", uv: 500, pv: 900, amt: 2100 },
		{ name: "C", uv: 200, pv: 550, amt: 2000 },
		{ name: "D", uv: 350, pv: 100, amt: 2550 },
		{ name: "E", uv: 150, pv: 800, amt: 2800 },
	];
	return (
		<div className="chart-container">
			<h2>Chart</h2>
			<LineChart
				width={450}
				height={250}
				data={data}
				margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
			>
				<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
				<XAxis dataKey="name" />
				<YAxis />
				<Line type="monotone" dataKey="uv" stroke="#8884d8" />
				<Line type="monotone" dataKey="pv" stroke="#dd84d8" />
			</LineChart>
		</div>
	);
};

export default Chart;
