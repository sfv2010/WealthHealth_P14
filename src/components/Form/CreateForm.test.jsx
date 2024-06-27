import { screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import CreateForm from "./CreateForm";
import customRender from "../../utils/customRender";

describe("Test CreateForm Component", () => {
    test("is rendered correctly", async () => {
        customRender(<CreateForm />);
        expect(screen.getByText("First Name")).toBeInTheDocument();
    });

    test("should be able to submit the form", async () => {
        const mockSetModalOpen = vi.fn();

        customRender(<CreateForm setModalOpen={mockSetModalOpen} />);

        // const firstName = screen.getByTestId("firstName");
        const firstName = screen.getByRole("textbox", { name: "First Name *" });
        const lastName = screen.getByTestId("lastName");
        const dateOfBirth = screen.getAllByRole("textbox")[2];
        const startDate = screen.getAllByRole("textbox")[3];
        const department = screen.getByTestId("department");
        const street = screen.getByTestId("street");
        const city = screen.getByTestId("city");
        const state = screen.getByTestId("state");
        const zipCode = screen.getByTestId("zipCode");

        fireEvent.change(firstName, { target: { value: "lena" } });
        fireEvent.change(lastName, { target: { value: "Smith" } });
        fireEvent.change(dateOfBirth, { target: { value: "11/29/1990" } });
        fireEvent.change(startDate, { target: { value: "11/29/2020" } });
        fireEvent.change(department, { target: { value: "Sales" } });
        fireEvent.change(street, { target: { value: "12 street" } });
        fireEvent.change(city, { target: { value: "New York" } });
        fireEvent.change(state, { target: { value: "AL" } });
        fireEvent.change(zipCode, { target: { value: "77250" } });

        fireEvent.submit(screen.getByTestId("create-employee"));
        expect(screen.queryByText("Last Name is required")).toBeNull();

        await waitFor(() => {
            expect(mockSetModalOpen).toHaveBeenCalledWith(true);
        });
    });
    test("Submitting the form with errors does not call setModalOpen", async () => {
        const mockSetModalOpen = vi.fn();

        customRender(<CreateForm setModalOpen={mockSetModalOpen} />);

        // Trigger form submission with errors
        userEvent.click(screen.getByText("Save"));

        // Assert that setModalOpen is not called
        await waitFor(() => {
            expect(mockSetModalOpen).not.toHaveBeenCalled();
        });
    });
    test("Submitting the form without filling required fields or submit the form with incorrect characters, displays an error message", async () => {
        customRender(<CreateForm />);
        const firstName = screen.getByTestId("firstName");
        fireEvent.change(firstName, { target: { value: "l" } });
        userEvent.click(screen.getByText("Save"));

        expect(
            await screen.findByText(
                "Please use only letters and enter at least 2 characters."
            )
        ).toBeInTheDocument();
        expect(
            await screen.findByText("Last Name is required")
        ).toBeInTheDocument();
        await screen.findByTestId("firstName");

        expect(screen.getByTestId("firstName")).toBeInTheDocument();
    });
});
