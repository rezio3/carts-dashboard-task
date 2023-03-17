import React from "react";
import { render, screen } from "@testing-library/react";
import Carts from "../context/CartsContext.jsx";
import Chart from "../Chart.jsx";

describe("Chart", () => {
	it("Should render Chart header", () => {
		render(
			<Carts>
				<Chart />
			</Carts>
		);

		expect(screen.getByTestId("chart-header")).toBeVisible();
	});
});
