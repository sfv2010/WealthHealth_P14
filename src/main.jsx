import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { EmployeeProfileProvider } from "./context/EmployeeProfileContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <EmployeeProfileProvider>
            <App />
        </EmployeeProfileProvider>
    </React.StrictMode>
);
