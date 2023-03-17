export const getData = async ({ carts, setCarts }) => {
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

export const deleteCart = async ({ e, carts, setCarts }) => {
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

export const addCart = async ({ e, carts, setCarts }) => {
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
