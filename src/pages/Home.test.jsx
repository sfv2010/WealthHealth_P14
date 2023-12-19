import { fireEvent, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Home from "./Home";
import customRender from "../utils/customRender";

describe("Test Home Component", () => {
    test("is rendered correctly", async () => {
        customRender(<Home />);
        expect(screen.getByText("Create Employee")).toBeInTheDocument();
    });

    test("opens and closes the modal", async () => {
        const { getByText, queryByText } = customRender(<Home />);

        // modal must initially closed
        expect(queryByText(/Employee created !/i)).toBe(null);

        // "Create Employee" heading is drawn first
        expect(getByText(/Create Employee/i)).toBeInTheDocument();

        const formComponent = screen.getByTestId("create-employee");
        fireEvent.submit(formComponent);

        await waitFor(() => {
            expect(getByText(/Employee created !/i)).toBeInTheDocument();
        });

        expect(queryByText(/Create Employee/i)).toBeInTheDocument();
        fireEvent.click(getByText("×"));
        expect(queryByText(/×/i)).toBe(null);
    });
});
