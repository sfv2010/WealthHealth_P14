import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const EmployeeProfileContext = createContext();

export const useEmployeeProfile = () => {
    return useContext(EmployeeProfileContext);
};

const EmployeeProfileProvider = ({ children }) => {
    const [employeeProfile, setEmployeeProfile] = useState({});

    return (
        <EmployeeProfileContext.Provider
            value={{ employeeProfile, setEmployeeProfile }}>
            {children}
        </EmployeeProfileContext.Provider>
    );
};
EmployeeProfileProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default EmployeeProfileProvider;
