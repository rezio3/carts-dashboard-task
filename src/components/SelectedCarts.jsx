import React, { useContext, useEffect, useState } from "react";
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
		});
	};

	useEffect(() => {
		getData();
	}, []);

	const handleDeleteCart = async (e) => {
		const deletedElement = await fetch(
			`https://dummyjson.com/carts/${e.target.id}`,
			{
				method: "DELETE",
			}
		)
			.then((res) => res.json())
			.then((e) => {
				return e;
			});
		carts.selectedCarts.map((el) => {
			if (el.id === Number(e.target.id)) {
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
	if (carts.selectedCarts) {
		return (
			<div className="list-of-carts">
				<h2>Selected Carts</h2>
				{carts.selectedCarts.map((e) => {
					return (
						<SingleCart
							key={e.id}
							name={`Cart ${e.id}`}
							id={e.id}
							cartSwitch={handleDeleteCart}
						/>
					);
				})}
			</div>
		);
	} else {
		return (
			<div className="list-of-carts">
				<h2>Selected Carts</h2>
				<p>Loading...</p>
			</div>
		);
	}
};

export default SelectedCarts;
