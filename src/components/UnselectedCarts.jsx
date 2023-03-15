import React, { useContext, useEffect } from "react";
import { CartsContext } from "./context/CartsContext";
import SingleCart from "./SingleCart";

const UnselectedCarts = () => {
	const [carts, setCarts] = useContext(CartsContext);
	// console.log(carts.unselectedCarts);
	const handleAddCart = async (e) => {
		// console.log(e.target.id);

		const addedElement = await fetch(
			`https://dummyjson.com/carts/${e.target.id}`
		)
			.then((res) => res.json())
			.then((e) => {
				return e;
			});
		carts.unselectedCarts.map((el) => {
			if (el.id === Number(e.target.id)) {
				const indexToDelete = carts.unselectedCarts.indexOf(el);
				console.log(indexToDelete);
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

	return (
		<div className="list-of-carts">
			<h2>Unselected Carts</h2>
			{carts.unselectedCarts.map((e) => {
				return (
					<SingleCart
						key={e.id}
						name={`Cart ${e.id}`}
						id={e.id}
						cartSwitch={handleAddCart}
					/>
				);
			})}
		</div>
	);
};

export default UnselectedCarts;
