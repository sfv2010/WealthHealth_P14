import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import EmployeeList from "./EmployeeList";
import customRender from "../utils/customRender";
import { EmployeeProfileProvider } from "../context/EmployeeProfileContext";
// import { data } from "../data/table";

describe("Test EmployeeList Component", () => {
    beforeEach(() => {
        customRender(<EmployeeList />, []);
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

    test("handles search functionality correctly with empty data", () => {
        const searchInput = screen.getByPlaceholderText("Search by ...");
        fireEvent.change(searchInput, { target: { value: "Ren" } });

        const kenCells = screen.queryAllByText("Ren");
        expect(kenCells.length).toBe(0);
    });
});
test("handles search functionality correctly with context data", async () => {
    const { rerender } = render(
        <EmployeeProfileProvider>
            <EmployeeList />
        </EmployeeProfileProvider>
    );
    // EmployeeProfileContext.Providerから値を取得

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
    rerender(
        <EmployeeProfileProvider>
            <EmployeeList employeeProfile={mockEmployeeProfileData} />
        </EmployeeProfileProvider>
    );

    const searchInput = screen.getByPlaceholderText("Search by ...");

    fireEvent.change(searchInput, { target: { value: "Ren" } });

    const testId = await screen.findAllByTestId("tr-employee");

    console.log(testId);
    expect(testId).toHaveLength(1);
    // expect(await screen.findByText("Ren")).toBeInTheDocument();

    // fireEvent.change(searchInput, { target: { value: "Ken" } });
    // const kenCells = screen.getAllByText("Ken");
    // const desiredCell = kenCells[0];
    // expect(desiredCell).toBeInTheDocument();

    // const salesCells = screen.getAllByText("Sales");
    // const salesCell = salesCells[0];
    // expect(salesCell).toBeInTheDocument();

    // const smithCells = screen.getAllByText("Smith");
    // const smithCell = smithCells[0];
    // expect(smithCell).toBeInTheDocument();
});
