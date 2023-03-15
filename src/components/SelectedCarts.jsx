import React, { useContext, useEffect } from "react";
import SingleCart from "./SingleCart";
import { CartsContext } from "./context/CartsContext";

const SelectedCarts = () => {
	const [carts, setCarts] = useContext(CartsContext);
	const getData = async () => {
		let cartData = await fetch("https://dummyjson.com/carts")
			.then((res) => res.json())
			.then((data) => {
				return data;
			});
		setCarts({
			...carts,
			selectedCarts: cartData.carts,
			cartOnChart: cartData.carts[0],
		});
	};

	useEffect(() => {
		getData();
	}, []);

	const handleDeleteCart = async (e) => {
		const deletedElement = await fetch(
			`https://dummyjson.com/carts/${e.target.name}`,
			{
				method: "DELETE",
			}
		)
			.then((res) => res.json())
			.then((e) => {
				return e;
			});
		carts.selectedCarts.map((el) => {
			if (el.id === Number(e.target.name)) {
				const indexToDelete = carts.selectedCarts.indexOf(el);
				setCarts({
					...carts,
					selectedCarts: [carts.selectedCarts.splice(indexToDelete, 1)],
				});
			}
		});
		const updatedArray = [...carts.unselectedCarts, deletedElement];
		const sortedArray = updatedArray.sort(function (a, b) {
			return a.id - b.id;
		});
		setCarts({
			...carts,
			unselectedCarts: sortedArray,
		});
	};
	const showChart = (e) => {
		let newCartOnChart;
		const numberClicked = Number(e.target.name);
		carts.selectedCarts.map((el) => {
			if (el.id === numberClicked) {
				newCartOnChart = el;
			}
		});
		console.log(newCartOnChart);
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
