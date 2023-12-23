import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import EmployeeList from "./EmployeeList";
import customRender from "../utils/customRender";
import { data } from "../data/table";
import { EmployeeProfileContext } from "../context/EmployeeProfileContext";

describe("Test EmployeeList Component", () => {
    beforeEach(() => {
        customRender(<EmployeeList />, data);
    });

    test("is rendered correctly", async () => {
        expect(screen.getByText("Current Employees")).toBeInTheDocument();
    });

    test("handles search functionality correctly with context data", () => {
        const searchInput = screen.getByPlaceholderText("Search by ...");
        fireEvent.change(searchInput, { target: { value: "Ken" } });
        const kenCells = screen.getAllByText("Ken");
        const desiredCell = kenCells[0];
        expect(desiredCell).toBeInTheDocument();

        const salesCells = screen.getAllByText("Sales");
        const salesCell = salesCells[0];
        expect(salesCell).toBeInTheDocument();

        const smithCells = screen.getAllByText("Smith");
        const smithCell = smithCells[0];
        expect(smithCell).toBeInTheDocument();
    });
});

test("handles search functionality correctly with empty data", () => {
    customRender(<EmployeeList />, []);
    console.log(document.body.innerHTML);
    const searchInput = screen.getByPlaceholderText("Search by ...");
    fireEvent.change(searchInput, { target: { value: "Ren" } });

    const kenCells = screen.queryAllByText("Ren");
    expect(kenCells.length).toBe(0);
});

test("handles search functionality correctly with mock data", async () => {
    // Mock data
    const mockEmployeeProfileData = [
        {
            firstName: "Ren",
            lastName: "Mi",
            startDate: "10/13/2010",
            department: "Sales",
            dateOfBirth: "10/21/1970",
            street: "153 Street brad franck",
            city: "New York",
            state: "NY",
            zipCode: "88110",
        },
    ];

    // Mock context value
    const mockContextValue = {
        employeeProfile: mockEmployeeProfileData,
    };

    // Render the component with the mocked context value
    render(
        <EmployeeProfileContext.Provider value={mockContextValue}>
            <EmployeeList />
        </EmployeeProfileContext.Provider>
    );

    const searchInput = screen.getByPlaceholderText("Search by ...");
    await waitFor(() => {
        fireEvent.change(searchInput, { target: { value: "Ren" } });
        expect(screen.getByText("Ren")).toBeInTheDocument();
    });

    const testId = await screen.findAllByTestId("tr-employee");
    expect(testId).toHaveLength(1);

    // Test sorting by a column
    const sortByFirstName = screen.getByText("First Name");
    fireEvent.click(sortByFirstName);

    await waitFor(() => {
        expect(screen.getByText("Ren")).toBeInTheDocument();
    });
});
