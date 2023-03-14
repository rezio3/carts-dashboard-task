import React from "react";
import "../style/css/SingleCart.css";

const SingleCart = (props) => {
	return (
		<div className="cart" data-id={props.id}>
			<span>{props.name}</span>
			<button onClick={props.deleteItem}>X</button>
		</div>
	);
};

export default SingleCart;
