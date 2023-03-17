import React, { useContext, useEffect } from "react";
import SingleCart from "./SingleCart";
import { CartsContext } from "./context/CartsContext";
import { getData, showChart, deleteCart } from "./functions/actions";

const SelectedCarts = () => {
	const [carts, setCarts] = useContext(CartsContext);

	useEffect(() => {
		getData({ carts, setCarts });
	}, []);

	const handleDeleteCart = (e) => {
		deleteCart({ e, carts, setCarts });
	};

	const showChart = (e) => {
		let newCartOnChart;
		const numberClicked = Number(e.target.name);
		carts.selectedCarts.map((el) => {
			if (el.id === numberClicked) {
				newCartOnChart = el;
			}
		});
		setCarts({
			...carts,
			cartOnChart: newCartOnChart,
		});
	};
	if (carts.selectedCarts) {
		return (
			<div className="list-of-carts">
				<h2>Added Carts</h2>
				{carts.selectedCarts.map((e) => {
					return (
						<SingleCart
							key={e.id}
							name={`Cart ${e.id}`}
							id={e.id}
							cartSwitch={handleDeleteCart}
							showChart={showChart}
							list="added"
						/>
					);
				})}
			</div>
		);
	} else {
		return (
			<div className="list-of-carts">
				<h2>Added Carts</h2>
				<p>Loading...</p>
			</div>
		);
	}
};

export default SelectedCarts;
