import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { EmployeeProfileProvider } from "../context/EmployeeProfileContext";

const customRender = (children, data) => {
    return render(
        <MemoryRouter>
            <EmployeeProfileProvider value={{ employeeProfile: data }}>
                {children}
            </EmployeeProfileProvider>
        </MemoryRouter>
    );
};

export default customRender;
