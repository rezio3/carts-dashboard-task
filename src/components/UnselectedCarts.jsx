import React, { useContext, useEffect } from "react";
import { CartsContext } from "./context/CartsContext";
import SingleCart from "./SingleCart";

const UnselectedCarts = () => {
	const [carts, setCarts] = useContext(CartsContext);
	console.log(carts.unselectedCarts);
	return (
		<div className="list-of-carts">
			<h2>Unselected Carts</h2>
			{carts.unselectedCarts.map((e) => {
				return <SingleCart key={e.id} name={`Cart ${e.id}`} />;
			})}
		</div>
	);
};

export default UnselectedCarts;
