import { fireEvent, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import Home from "./Home";
import customRender from "../utils/customRender";

describe("Test Home Component", () => {
    beforeEach(() => {
        customRender(<Home />);
    });

    test("is rendered correctly", async () => {
        expect(screen.getByText("Create Employee")).toBeInTheDocument();
    });

    test("opens and closes the modal", async () => {
        const modalTestId = screen.getByTestId("my-react-modal-container");
        const firstName = screen.getByTestId("firstName");
        const lastName = screen.getByTestId("lastName");
        const dateOfBirth = screen.getAllByRole("textbox")[2];
        const startDate = screen.getAllByRole("textbox")[3];
        const department = screen.getByTestId("department");
        const street = screen.getByTestId("street");
        const city = screen.getByTestId("city");
        const state = screen.getByTestId("state");
        const zipCode = screen.getByTestId("zipCode");
        const formComponent = screen.getByTestId("create-employee");

        // modal must initially closed
        expect(modalTestId).toHaveClass("opacity-0");

        fireEvent.change(firstName, { target: { value: "lena" } });
        fireEvent.change(lastName, { target: { value: "Smith" } });
        fireEvent.change(dateOfBirth, { target: { value: "11/29/1990" } });
        fireEvent.change(startDate, { target: { value: "11/29/2020" } });
        fireEvent.change(department, { target: { value: "Sales" } });
        fireEvent.change(street, { target: { value: "12 street" } });
        fireEvent.change(city, { target: { value: "New York" } });
        fireEvent.change(state, { target: { value: "AL" } });
        fireEvent.change(zipCode, { target: { value: "77250" } });

        // Submit the form to open the modal
        fireEvent.submit(formComponent);
        // Modal must be open
        await waitFor(() => {
            expect(modalTestId).toHaveClass("opacity-100");
        });
        // Close the modal by clicking the close button (×)
        fireEvent.click(screen.getByText("×"));
        // Modal must be closed
        expect(modalTestId).toHaveClass("opacity-0");
    });
});
