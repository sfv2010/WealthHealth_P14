import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const EmployeeProfileContext = createContext();

export const EmployeeProfileProvider = ({ children }) => {
    const [employeeProfile, setEmployeeProfile] = useState([]);
    const addEmployee = (employee) => {
        setEmployeeProfile((state) => [...state, employee]);
    };

    return (
        <EmployeeProfileContext.Provider
            value={{ employeeProfile, addEmployee }}>
            {children}
        </EmployeeProfileContext.Provider>
    );
};
EmployeeProfileProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
