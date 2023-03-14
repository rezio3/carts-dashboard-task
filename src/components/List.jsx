import React from "react";
import "../style/css/List.css";
import SelectedCarts from "./SelectedCarts";
import UnselectedCarts from "./UnselectedCarts";

const List = () => {
	return (
		<div className="list-container">
			<SelectedCarts />
			<UnselectedCarts />
		</div>
	);
};

export default List;
