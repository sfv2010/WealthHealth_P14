import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import InputField from "./InputField";

describe("Test InputField Component", () => {
    test("is rendered correctly", async () => {
        const label = "First Name";
        const placeholder = "Enter your first name";
        const control = {
            name: "firstName",
            value: "",
            onChange: vi.fn(),
        };
        const errors = "First Name is required";

        render(
            <InputField
                label={label}
                type="text"
                placeholder={placeholder}
                control={control}
                errors={errors}
            />
        );
        // Check if label is rendered
        const input = screen.getByTestId("firstName");
        const errorMessage = screen.getByText(errors);
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("type", "text");
        expect(input).toHaveValue("");
        expect(input).toHaveAttribute("placeholder", placeholder);
        expect(errorMessage).toBeInTheDocument();
        expect(await screen.findByText("First Name")).toBeInTheDocument();
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });
    test("Renders InputField with type date correctly", async () => {
        const label = "Date of Birth";
        const control = {
            name: "dateOfBirth",
            value: "",
            onChange: vi.fn(),
        };
        const errors = "Please enter your date of birth in mm/dd/yyyy format";

        render(
            <InputField
                label={label}
                type="date"
                control={control}
                errors={errors}
            />
        );
        const errorMessage = screen.getByText(errors);
        const datePicker = screen.getByRole("textbox");

        fireEvent.change(datePicker, { target: { value: "01/20/2000" } });
        fireEvent.blur(datePicker);
        expect(datePicker).toBeInTheDocument();
        await waitFor(() => {
            expect(control.onChange).toHaveBeenCalledWith("01/20/2000");
            expect(errorMessage).toBeInTheDocument();
        });
    });

    test("InputField handles user input correctly", async () => {
        const control = {
            name: "testField",
            value: "",
            onChange: vi.fn(),
        };

        render(<InputField label="Test Label" control={control} errors="" />);

        const inputField = screen.getByTestId("testField");

        fireEvent.change(inputField, { target: { value: "test input" } });

        expect(control.onChange).toHaveBeenCalledWith("test input");
    });

    test("handleDateBlur handles invalid date correctly", async () => {
        const control = {
            name: "dateOfBirth",
            value: "",
            onChange: vi.fn(),
        };

        render(
            <InputField
                label="Date of Birth"
                type="date"
                control={control}
                errors="Invalid date"
            />
        );

        const datePicker = screen.getByRole("textbox");

        // Simulate an invalid date input
        fireEvent.change(datePicker, { target: { value: "20/01/2000" } });
        fireEvent.blur(datePicker);

        // Check if the onChange function is called with an empty string
        expect(control.onChange).toHaveBeenCalledWith("");

        // Check if the error message is displayed
        expect(
            screen.getByText(
                "Please enter your date of birth in mm/dd/yyyy format"
            )
        ).toBeInTheDocument();
    });

    test("Custom header buttons handle click correctly", async () => {
        const control = {
            name: "dateOfBirth",
            value: new Date(2022, 0, 1),
            onChange: vi.fn(),
        };

        render(
            <InputField
                label="Date of Birth"
                type="date"
                control={control}
                errors="Invalid date"
            />
        );
        const datePicker = screen.getByRole("textbox");
        fireEvent.click(datePicker);

        const decreaseButton = screen.getByRole("button", { name: /</i });
        const increaseButton = screen.getByRole("button", { name: />/i });
        const monthSelect = screen.getByLabelText(/Month/i);

        fireEvent.click(decreaseButton);
        fireEvent.click(increaseButton);
        fireEvent.change(monthSelect, { target: { selectedIndex: 1 } });

        const dayButton = screen.getByText("15");
        fireEvent.click(dayButton);

        expect(control.onChange).toHaveBeenCalledTimes(1);
    });
});
