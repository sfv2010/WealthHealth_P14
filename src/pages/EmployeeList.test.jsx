import { fireEvent, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import EmployeeList from "./EmployeeList";
import customRender from "../utils/customRender";
import { data } from "../data/table";

describe("Test EmployeeList Component", () => {
    beforeEach(() => {
        customRender(<EmployeeList />, data);
    });

    test("is rendered correctly", async () => {
        expect(screen.getByText("Current Employees")).toBeInTheDocument();
    });
    test("handles search functionality correctly", () => {
        const searchInput = screen.getByPlaceholderText("Search by ...");
        fireEvent.change(searchInput, { target: { value: "Ken" } });
        const kenCells = screen.getAllByText("Ken");
        const desiredCell = kenCells[0];
        expect(desiredCell).toBeInTheDocument();

        const salesCells = screen.getAllByText("Sales");
        const salesCell = salesCells[0];
        expect(salesCell).toBeInTheDocument();

        const SmithCells = screen.getAllByText("Smith");
        const SmithCell = SmithCells[0];
        expect(SmithCell).toBeInTheDocument();
    });
});
// test("should sort data when clicking on the sorting button", () => {
//     const { getByText, getAllByRole } = customRender(<EmployeeList />, data);

//     const columnHeader = getByText("First Name");

//     fireEvent.click(columnHeader);

//     // Get the table rows and check if the data is sorted
//     const tableRows = getAllByRole("row");

//     for (let i = 0; i < tableRows.length - 1; i++) {
//         const currentRow = tableRows[i];
//         const nextRow = tableRows[i + 1];

//         const nextValueElement = nextRow.querySelector('th[role="cell"]');

//         console.log("nextValueElement:", nextValueElement);
//         const currentValue = currentRow.querySelector(
//             '[aria-label="Sort by ascending"]'
//         ).textContent;
//         console.log("currentValue:", currentValue);
//         const nextValue = nextRow.querySelector(
//             '[aria-label="Sort by ascending"]'
//         ).textContent;
//         expect(currentValue <= nextValue).toBeTruthy();
//     }
// });
