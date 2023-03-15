import React, { useContext, useEffect } from "react";
import "../style/css/Chart.css";
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
} from "recharts";
import { CartsContext } from "./context/CartsContext";

const Chart = () => {
	const [carts] = useContext(CartsContext);
	let data;
	if (carts.cartOnChart) {
		const { products } = carts.cartOnChart;

		console.log(products);
		const p = (i) => {
			return products[i].price;
		};
		const dP = (i) => {
			return products[i].discountedPrice / products[i].quantity;
		};
		data = [
			{ name: "product 1", uv: p(0), pv: dP(0), amt: 2400 },
			{ name: "product 2", uv: p(1), pv: dP(1), amt: 2100 },
			{ name: "product 3", uv: p(2), pv: dP(2), amt: 2000 },
			{ name: "product 4", uv: p(3), pv: dP(3), amt: 2550 },
			{ name: "product 5", uv: p(4), pv: dP(4), amt: 2800 },
		];
	}

	return (
		<div className="chart-container">
			<h2>Chart</h2>

			{carts.cartOnChart ? (
				<>
					<span>Cart {carts.cartOnChart.id}</span>
					<LineChart
						width={450}
						height={250}
						data={data}
						margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
					>
						<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Line type="monotone" dataKey="uv" stroke="#8884d8" />
						<Line type="monotone" dataKey="pv" stroke="#dd84d8" />
					</LineChart>
				</>
			) : null}
		</div>
	);
};

export default Chart;
