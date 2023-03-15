import React, { useContext } from "react";
import { CartsContext } from "./context/CartsContext";
import SingleCart from "./SingleCart";

const UnselectedCarts = () => {
	const [carts, setCarts] = useContext(CartsContext);
	const handleAddCart = async (e) => {
		const addedElement = await fetch(
			`https://dummyjson.com/carts/${e.target.name}`
		)
			.then((res) => res.json())
			.then((e) => {
				return e;
			});

		carts.unselectedCarts.map((el) => {
			if (el.id === Number(e.target.name)) {
				const indexToDelete = carts.unselectedCarts.indexOf(el);
				setCarts({
					...carts,
					unselectedCarts: [carts.unselectedCarts.splice(indexToDelete, 1)],
				});
				return el;
			}
		});

		const updatedArray = [...carts.selectedCarts, addedElement];
		const sortedArray = updatedArray.sort(function (a, b) {
			return a.id - b.id;
		});
		setCarts({
			...carts,
			selectedCarts: sortedArray,
		});
	};
	const showChart = (e) => {
		let newCartOnChart;
		const numberClicked = Number(e.target.name);
		carts.unselectedCarts.map((el) => {
			if (el.id === numberClicked) {
				newCartOnChart = el;
			}
		});
		setCarts({
			...carts,
			cartOnChart: newCartOnChart,
		});
	};
	return (
		<div className="list-of-carts">
			<h2>Deleted Carts</h2>
			{carts.unselectedCarts.map((e) => {
				return (
					<SingleCart
						key={e.id}
						name={`Cart ${e.id}`}
						id={e.id}
						cartSwitch={handleAddCart}
						showChart={showChart}
						list="deleted"
					/>
				);
			})}
		</div>
	);
};

export default UnselectedCarts;
