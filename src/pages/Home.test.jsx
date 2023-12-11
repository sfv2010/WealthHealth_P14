import { screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Home from "./Home";
// import Modal from "my-react-modal-sv";
import customRender from "../utils/customRender";

describe("Test Home Component", () => {
    test("is rendered correctly", async () => {
        const mockModal = {
            isOpen: false,
            onClose: vi.fn(),
            children: "Employee created !",
        };

        // vi.mock("my-react-modal-sv", () => ({
        //     __esModule: true,
        //     default: mockModal.onClose,
        //     isOpen: mockModal.isOpen,
        //     onClose: mockModal.onClose,
        //     children: mockModal.children,
        // }));
        console.log(mockModal);
        customRender(<Home />);
        expect(screen.getByText("Create Employee")).toBeInTheDocument();
        expect(mockModal.isOpen).toBe(false);
    });
});
