import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import customRender from "../utils/customRender";

describe("Test Header Component", () => {
    test("is rendered correctly", () => {
        customRender(<Header />);
        expect(screen.getByText("HRnet")).toBeInTheDocument();
    });

    test("contains at least one button", async () => {
        customRender(<Header />);
        expect(await screen.findAllByRole("button")).toHaveLength(1);
    });

    test("displays correct link based on route", () => {
        render(
            <MemoryRouter initialEntries={["/employee"]}>
                <Header />
            </MemoryRouter>
        );
        expect(screen.getByText("Home")).toBeInTheDocument();
    });
});
