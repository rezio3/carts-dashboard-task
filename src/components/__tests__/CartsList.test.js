import React from "react";
import { render, screen } from "@testing-library/react";
import Carts from "../context/CartsContext.jsx";
import SelectedCarts from "../SelectedCarts.jsx";
import UnselectedCarts from "../UnselectedCarts.jsx";

describe("Added Carts header", () => {
	it("Should render Added Carts text", () => {
		render(
			<Carts>
				<SelectedCarts />
			</Carts>
		);

		expect(screen.getByTestId("added-header")).toBeVisible();
	});

	describe("Loading... text", () => {
		it("Should render Loading... span when data is not loaded", () => {
			render(
				<Carts>
					<SelectedCarts />
				</Carts>
			);

			expect(screen.getByTestId("loading")).toBeVisible();
		});

		describe("Show added carts list", () => {
			it("Should render entire list of added carts", () => {
				render(
					<Carts>
						<SelectedCarts />
					</Carts>
				);
				expect(screen.getByTestId("cart-list")).toBeVisible();
			});
		});
	});
});
describe("Deleted Carts header", () => {
	it("Should render Deleted Carts text", () => {
		render(
			<Carts>
				<UnselectedCarts />
			</Carts>
		);
		expect(screen.getByTestId("deleted-header")).toBeVisible();
	});
});
