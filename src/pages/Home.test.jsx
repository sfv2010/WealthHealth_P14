import { fireEvent, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Home from "./Home";
import customRender from "../utils/customRender";

describe("Test Home Component", () => {
    // const mockCloseModal = vi.fn();
    // vi.mock("my-react-modal-sv", () => ({
    //     __esModule: true,
    //     default: ({ isOpen }) => {
    //         // isOpenとonCloseを渡してもよいが、今回はonCloseだけ使用
    //         return isOpen ? <div>Mock Modal</div> : null;
    //     },
    // }));
    test("is rendered correctly", async () => {
        customRender(<Home />);
        console.log(Home);
        expect(screen.getByText("Create Employee")).toBeInTheDocument();
    });

    // test("onClose function is called when modal is closed", () => {
    //     const { getByText } = customRender(<Home />);

    //     const formComponent = screen.getByTestId("create-employee");
    //     fireEvent.submit(formComponent);
    //     fireEvent.click(getByText("×"));

    //     expect(mockCloseModal).toHaveBeenCalled();
    // });

    //   vi.mock('my-react-modal-sv', () => ({
    // 	__esModule: true,
    // 	default: ({ isOpen, onClose }) => {
    // 	  // isOpenとonCloseを渡してもよいが、今回はonCloseだけ使用
    // 	  return isOpen ? <div>Mock Modal</div> : null;
    // 	},
    //   }));

    test("opens and closes the modal", async () => {
        const { getByText, queryByText } = customRender(<Home />);

        // modal must initially closed
        expect(queryByText(/Employee created !/i)).toBe(null);

        // "Create Employee" heading is drawn first
        expect(getByText(/Create Employee/i)).toBeInTheDocument();

        const formComponent = screen.getByTestId("create-employee");
        fireEvent.submit(formComponent);

        await waitFor(() => {
            expect(getByText(/Employee created !/i)).toBeInTheDocument();
        });

        expect(queryByText(/Create Employee/i)).toBeInTheDocument();
        fireEvent.click(getByText("×"));
        expect(queryByText(/Employee created !/i)).toBe(null);
    });
});
