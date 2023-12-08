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
    test("calculates combinedData correctly", () => {
        screen.getByRole("table");
    });
});
