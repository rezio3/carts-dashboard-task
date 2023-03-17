import React, { useContext } from "react";
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
		const p = (i) => {
			return products[i].price;
		};
		const dP = (i) => {
			return products[i].discountedPrice / products[i].quantity;
		};
		data = [
			{ name: "product 1", price: p(0), discounted: dP(0) },
			{ name: "product 2", price: p(1), discounted: dP(1) },
			{ name: "product 3", price: p(2), discounted: dP(2) },
			{ name: "product 4", price: p(3), discounted: dP(3) },
			{ name: "product 5", price: p(4), discounted: dP(4) },
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
						<Line type="monotone" dataKey="price" stroke="#8884d8" />
						<Line type="monotone" dataKey="discounted" stroke="#dd84d8" />
					</LineChart>
				</>
			) : null}
		</div>
	);
};

export default Chart;
