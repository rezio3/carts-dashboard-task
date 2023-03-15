import React from "react";
import "../style/css/SingleCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

const SingleCart = (props) => {
	return (
		<div className="cart">
			<span>{props.name}</span>

			<div className="buttons-container">
				<button
					name={props.id}
					onClick={props.cartSwitch}
					className="trash-button"
				>
					{props.list === "added" ? (
						<FontAwesomeIcon icon={faTrash} className="trash-icon" />
					) : (
						<FontAwesomeIcon icon={faPlus} className="trash-icon" />
					)}
				</button>
				<button
					name={props.id}
					onClick={props.showChart}
					className="chart-button"
				>
					<FontAwesomeIcon icon={faChartSimple} className="chart-icon" />
				</button>
			</div>
		</div>
	);
};

export default SingleCart;
