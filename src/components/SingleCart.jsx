import React from "react";
import "../style/css/SingleCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const SingleCart = (props) => {
	return (
		<div className="cart" data-id={props.id}>
			<span>{props.name}</span>

			<button id={props.id} onClick={props.cartSwitch}>
				{props.list === "added" ? (
					<FontAwesomeIcon icon={faTrash} className="icon" />
				) : (
					<FontAwesomeIcon icon={faPlus} className="icon" />
				)}
			</button>
		</div>
	);
};

export default SingleCart;
