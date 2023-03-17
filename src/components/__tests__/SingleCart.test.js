import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SingleCart from "../SingleCart";

const foo = () => {};
const foo2 = () => {};
const cartSwitchSpy = jest.fn();

describe("SingleCart Component", () => {
	it("Should render single cart box with name and buttons", async () => {
		render(
			<SingleCart
				key={1}
				name={"Cart 1"}
				id={1}
				cartSwitch={foo}
				showChart={foo2}
				list="added"
			/>
		);
		expect(screen.getByTestId(`Cart 1`)).toBeVisible();
		expect(screen.getByTestId("switch-button")).toBeVisible();
		expect(screen.getByTestId("chart-button")).toBeVisible();
	});
	describe("when click delete button", () => {
		it("should run function", () => {
			render(
				<SingleCart
					key={1}
					name={"Cart 1"}
					id={1}
					cartSwitch={cartSwitchSpy}
					showChart={cartSwitchSpy}
					list="added"
				/>
			);

			fireEvent.click(screen.getByTestId("switch-button"));
			expect(cartSwitchSpy).toHaveBeenCalled();
			fireEvent.click(screen.getByTestId("chart-button"));
			expect(cartSwitchSpy).toHaveBeenCalled();
		});
	});
});
