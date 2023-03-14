import React, { createContext, useState } from "react";

const cartsData = {};

export const CartsContext = createContext();

const Carts = ({ children }) => {
	const [carts, setCarts] = useState(cartsData);

	return (
		<CartsContext.Provider value={[carts, setCarts]}>
			{children}
		</CartsContext.Provider>
	);
};

export default Carts;
