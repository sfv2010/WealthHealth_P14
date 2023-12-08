import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Pagination from "./Pagination";

describe("Test Pagination Component", () => {
    let pageSize,
        pageIndex,
        pageCount,
        combinedData,
        nextPage,
        previousPage,
        gotoPage;

    beforeEach(() => {
        pageSize = 10;
        pageIndex = 1;
        pageCount = 3;
        combinedData = Array.from(
            { length: 30 },
            (_, index) => `Entry ${index + 1}`
        );
        nextPage = vi.fn();
        previousPage = vi.fn();
        gotoPage = vi.fn();

        render(
            <Pagination
                pageSize={pageSize}
                pageIndex={pageIndex}
                pageCount={pageCount}
                combinedData={combinedData}
                nextPage={nextPage}
                previousPage={previousPage}
                gotoPage={gotoPage}
            />
        );
    });
    test("is rendered correctly", async () => {
        const entriesInfo = screen.getByTestId("showing");
        const entriesInfoText =
            entriesInfo.textContent || entriesInfo.innerText;
        expect(entriesInfoText).toMatch(/Showing \d+ to \d+ of \d+ entries/);
    });
    test("Previous and Next button works correctly", () => {
        const previousButton = screen.getByText(/Previous/i);
        const nextButton = screen.getByText(/Next/i);

        fireEvent.click(nextButton);
        expect(nextPage).toHaveBeenCalledTimes(1);
        fireEvent.click(previousButton);
        expect(previousPage).toHaveBeenCalledTimes(1);
    });
    test("Page buttons work correctly", async () => {
        const pageButtons = screen.getAllByRole("button", { name: /\d+/ });
        expect(pageButtons).toHaveLength(pageCount);

        fireEvent.click(pageButtons[0]);
        expect(gotoPage).toHaveBeenCalledWith(0);
        fireEvent.click(pageButtons[1]);
        expect(gotoPage).toHaveBeenCalledWith(0);
        fireEvent.click(pageButtons[2]);
        expect(gotoPage).toHaveBeenCalledWith(2);
    });
});

test("Next button is disabled when pageIndex is equal to or greater than pageCount - 1", () => {
    render(
        <Pagination
            pageSize={10}
            pageIndex={2} //last page
            pageCount={3}
            combinedData={[]}
            nextPage={vi.fn()}
            previousPage={vi.fn()}
            gotoPage={vi.fn()}
        />
    );
    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeDisabled();
});
test("Page buttons work correctly", () => {
    const combinedData = Array.from(
        { length: 30 },
        (_, index) => `Entry ${index + 1}`
    );
    const gotoPage = vi.fn();

    render(
        <Pagination
            pageSize={10}
            pageIndex={0}
            pageCount={3}
            combinedData={combinedData}
            nextPage={vi.fn()}
            previousPage={vi.fn()}
            gotoPage={gotoPage}
        />
    );

    // Verify the Page buttons
    const pageButtons = screen.getAllByRole("button", { name: /\d+/ });

    fireEvent.click(pageButtons[1]);
    expect(gotoPage).toHaveBeenCalledWith(1);

    fireEvent.click(pageButtons[2]);
    expect(gotoPage).toHaveBeenCalledWith(2);
});
