import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Search from "./Search";

describe("Test Search Component", () => {
    test("is rendered correctly", async () => {
        const searchValue = "s";
        const setSearchValue = vi.fn();
        const setGlobalFilter = vi.fn();

        render(
            <Search
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                setGlobalFilter={setGlobalFilter}
            />
        );
        const searchInfo = screen.getByText("Search");
        expect(searchInfo).toBeInTheDocument();

        const inputSearch = screen.getByRole("textbox", { name: /Search/i });
        expect(inputSearch).toBeInTheDocument();
        expect(inputSearch).toHaveAttribute("type", "text");
        expect(inputSearch).toHaveValue("s");

        fireEvent.change(inputSearch, { target: { value: "New Test" } });
        expect(setSearchValue).toHaveBeenCalledWith("New Test");
        expect(setGlobalFilter).toHaveBeenCalledWith("New Test");
    });
});
