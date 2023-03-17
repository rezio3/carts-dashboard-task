import React, { useContext } from "react";
import { CartsContext } from "./context/CartsContext";
import { addCart } from "./functions/actions";
import SingleCart from "./SingleCart";

const UnselectedCarts = () => {
	const [carts, setCarts] = useContext(CartsContext);

	const handleAddCart = (e) => {
		addCart({ e, carts, setCarts });
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
			<h2 data-testid="deleted-header">Deleted Carts</h2>
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
