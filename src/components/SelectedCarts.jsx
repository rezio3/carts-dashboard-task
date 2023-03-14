import React, { useContext, useEffect, useState } from "react";
import SingleCart from "./SingleCart";
import { CartsContext } from "./context/CartsContext";

const SelectedCarts = () => {
	const [carts, setCarts] = useContext(CartsContext);

	useEffect(() => {
		getData();
	}, []);
	const getData = async () => {
		let cartData = await fetch("https://dummyjson.com/carts")
			.then((res) => res.json())
			.then((data) => {
				return data;
			});
		// console.log(cartData.carts.length);
		// setState(true);
		setCarts({
			...carts,
			selectedCarts: cartData.carts,
		});
	};

	if (carts.selectedCarts) {
		// console.log(state.data);
		return (
			<div className="list-of-carts">
				<h2>Selected Carts</h2>
				{carts.selectedCarts.map((e) => {
					return (
						<SingleCart
							name={`Cart ${e.id}`}
							id={e.id}
							deleteItem={handleDeleteCart}
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
