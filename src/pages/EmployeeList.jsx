import { useMemo, useState, useContext } from "react";
// import { useTable, useSortBy } from "react-table";
import {
    useTable,
    useSortBy,
    usePagination,
    useFilters,
} from "@tanstack/react-table";
import { columns, data } from "../data/table";
// import { useEmployeeProfile } from "../context/EmployeeProfileContext";
// import { useMemo, useState } from "react";
import { EmployeeProfileContext } from "../context/EmployeeProfileContext";

function EmployeeList() {
    const { employeeProfile } = useContext(EmployeeProfileContext);
    const [searchValue, setSearchValue] = useState("");

    // const { employeeProfile } = useEmployeeProfile();
    const newEmployee = useMemo(() => {
        return {
            firstName: employeeProfile.firstName,
            lastName: employeeProfile.lastName,
            startDate: employeeProfile.startDate,
            department: employeeProfile.department,
            dateOfBirth: employeeProfile.dateOfBirth,
            street: employeeProfile.street,
            city: employeeProfile.city,
            state: employeeProfile.state,
            zipCode: employeeProfile.zipCode,
        };
    }, [employeeProfile]);

    const sortedData = useMemo(() => {
        const combinedData =
            newEmployee && newEmployee.firstName !== undefined
                ? [...data, newEmployee]
                : data;
        console.log("combinedData", combinedData);

        // Filter the data based on searchValue
        const filteredData = combinedData.filter((employee) => {
            const searchableFields = [
                "firstName",
                "lastName",
                "startDate",
                "department",
                "street",
                "city",
                "state",
                "zipCode",
            ];

            return searchableFields.some((field) =>
                employee[field]
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
            );
        });

        console.log("filteredData:", filteredData);

        // Get sort key and direction
        const sortColumn = columns.find((column) => column.isSorted);
        const sortKey = sortColumn ? sortColumn.accessor : undefined;
        const isSortedDesc = sortColumn ? sortColumn.isSortedDesc : false;

        if (sortKey) {
            return filteredData.sort((a, b) => {
                if (isSortedDesc) {
                    return b[sortKey].localeCompare(a[sortKey]);
                } else {
                    return a[sortKey].localeCompare(b[sortKey]);
                }
            });
        }

        // Do not sort if there is no sort key
        return filteredData;
    }, [newEmployee, searchValue]);

    const table = useTable(
        {
            columns,
            data: sortedData,
        },
        useFilters,
        useSortBy,
        usePagination
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of rows
        canPreviousPage,
        canNextPage,
        // pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = table;

    return (
        <div className="mt-20 mx-4 lg:mx-10 xl:mx-32 font-lato">
            <h1 className="text-3xl text-green-700 font-bold text-center font-youngSerif mb-20">
                Current Employees
            </h1>
            <div className="sm:flex justify-between items-center  py-3 ">
                <div>
                    <label htmlFor="select">Show</label>
                    <select
                        id="select"
                        className="mx-1 border-2 border-gray-200 rounded-md focus:outline-green-700">
                        <option value="10">10</option>
                        <option value="20">25</option>
                        <option value="20">50</option>
                        <option value="20">100</option>
                    </select>
                    <span>entries</span>
                </div>
                <div className="flex items-center mt-3 md:mt-0">
                    <label className="block text-black  pr-2" htmlFor="search">
                        Search
                    </label>
                    <input
                        className="border-2 rounded  border-gray-200 p-1 text-gray-700 leading-tight focus:outline-green-700  md:p-2"
                        type="text"
                        id="search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Search by name..."
                    />
                </div>
            </div>

            <div className="overflow-x-auto shadow-md">
                <table
                    {...getTableProps()}
                    className="table-fixed border-solid border-2 border-green-800 border-spacing-0 shadow-2xl box-border ">
                    <thead>
                        {headerGroups.map((headerGroup, headerGroupIndex) => (
                            <tr
                                key={headerGroupIndex}
                                {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(
                                    (column, columnIndex) => (
                                        <th
                                            className="border-solid border-2 border-green-800 bg-custom-500 text-white py-1 pl-2 w-[100px] lg:w-[130px] text-xs lg:text-base whitespace-nowrap"
                                            key={columnIndex}
                                            {...column.getHeaderProps(
                                                column.getSortByToggleProps()
                                            )}>
                                            {column.render("Header")}{" "}
                                            <span className="text-sm text-custom-502 pl-1">
                                                {!column.isSorted && (
                                                    <i className="fa fa-sort"></i>
                                                )}
                                                {column.isSorted &&
                                                    !column.isSortedDesc &&
                                                    "🔼"}
                                                {column.isSorted &&
                                                    column.isSortedDesc &&
                                                    "🔽"}
                                            </span>
                                        </th>
                                    )
                                )}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, rowIndex) => {
                            prepareRow(row);
                            return (
                                <tr
                                    className="even:bg-custom-501 hover:bg-custom-502 hover:text-white "
                                    key={rowIndex}
                                    {...row.getRowProps()}>
                                    {row.cells.map((cell, cellIndex) => {
                                        return (
                                            <td
                                                className="text-center border-solid border-2 border-green-800 p-1 text-xs lg:text-base truncate ..."
                                                key={cellIndex}
                                                {...cell.getCellProps()}>
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="sm:flex justify-between items-center mt-2 ">
                <div className="block text-black pr-2">
                    Showing <span>1</span> to <span>10</span> of{" "}
                    <span>{sortedData.length}</span> entries{" "}
                </div>
                <div className="block text-black   pr-2">
                    Previous <span>1</span> Next
                </div>
            </div>
            <div>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {"<<"}
                </button>{" "}
                <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}>
                    {"<"}
                </button>{" "}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {">"}
                </button>{" "}
                <button
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}>
                    {">>"}
                </button>{" "}
                <span>
                    Page{" "}
                    <strong>
                        {pageIndex + 1} of {pageCount}
                    </strong>{" "}
                </span>
                <span>
                    | Go to page:{" "}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value
                                ? Number(e.target.value) - 1
                                : 0;
                            gotoPage(page);
                        }}
                        style={{ width: "100px" }}
                    />
                </span>{" "}
                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                    }}>
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default EmployeeList;
