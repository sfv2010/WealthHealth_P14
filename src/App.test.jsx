import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";
import { EmployeeProfileProvider } from "./context/EmployeeProfileContext";

test("APP is rendered correctly", () => {
    render(
        <EmployeeProfileProvider>
            <App />
        </EmployeeProfileProvider>
    );

    const homeElement = screen.getByText("Create Employee");
    expect(homeElement).toBeInTheDocument();
});
