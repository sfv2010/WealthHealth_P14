import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import PaginationSelect from "./PaginationSelect";

describe("Test PaginationSelect Component", () => {
    test("is rendered correctly", () => {
        const pageSize = 25;
        const setPageSize = vi.fn();
        render(
            <PaginationSelect pageSize={pageSize} setPageSize={setPageSize} />
        );
        const label = screen.getByLabelText(/Show/i);
        expect(label).toBeInTheDocument();

        const select = screen.getByRole("combobox", { name: /Show/i });
        expect(select).toBeInTheDocument();
        expect(select).toHaveValue("25");

        const options = screen.getAllByRole("option");
        expect(options).toHaveLength(4);
        expect(options[0]).toHaveValue("10");
        expect(options[1]).toHaveValue("25");
        expect(options[2]).toHaveValue("50");
        expect(options[3]).toHaveValue("100");

        fireEvent.change(select, { target: { value: "50" } });

        expect(setPageSize).toHaveBeenCalledWith(50);
    });
});
