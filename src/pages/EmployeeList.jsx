import { useState, useContext, useMemo } from "react";
import {
    useTable,
    useGlobalFilter,
    useSortBy,
    usePagination,
} from "react-table";

import { columns, data } from "../data/table";
import { EmployeeProfileContext } from "../context/EmployeeProfileContext";
import Pagination from "../components/List/Pagination";
import Search from "../components/List/Search";
import PaginationSelect from "../components/List/PaginationSelect";

function EmployeeList() {
    const { employeeProfile } = useContext(EmployeeProfileContext);
    const [searchValue, setSearchValue] = useState("");
    const combinedData = useMemo(() => {
        if (employeeProfile && employeeProfile.length > 0) {
            return employeeProfile.concat(data);
        }
        return data;
    }, [employeeProfile]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        // rows,
        prepareRow,
        setGlobalFilter,
        state: { pageIndex, pageSize },
        pageCount,
        nextPage,
        previousPage,
        setPageSize,
        page,
        gotoPage,
    } = useTable(
        {
            columns,
            data: combinedData,
            // data: employeeProfile,
            filterTypes: {
                global: (rows, id, filterValue) => {
                    return rows.filter((row) => {
                        const rowValue = row.values[id];
                        return rowValue !== undefined
                            ? String(rowValue)
                                  .toLowerCase()
                                  .includes(filterValue.toLowerCase())
                            : true;
                    });
                },
            },
            initialState: { pageIndex: 0, pageSize: 10 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    return (
        <div className="my-5 sm:my-20 mx-4 lg:mx-10 xl:mx-32 font-lato">
            <h1 className="text-2xl sm:text-3xl text-green-700 font-bold text-center font-youngSerif mb-5 sm:mb-20">
                Current Employees
            </h1>
            <div className="sm:flex justify-between items-center py-3">
                <PaginationSelect
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                />
                <Search
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    setGlobalFilter={setGlobalFilter}
                />
            </div>

            <div className="overflow-x-auto shadow-md">
                <table
                    {...getTableProps()}
                    role="table"
                    tabIndex={0}
                    className="table-fixed border-solid border-2 border-green-800 border-spacing-0 shadow-2xl box-border ">
                    <thead>
                        {headerGroups.map((headerGroup, headerGroupIndex) => (
                            <tr
                                // tabIndex={0}
                                key={headerGroupIndex}
                                {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(
                                    (column, columnIndex) => (
                                        <th
                                            tabIndex={0}
                                            className="border-solid border-2 border-green-800 bg-custom-500 text-white py-1 pl-2 w-[100px] lg:w-[130px] text-xs lg:text-base whitespace-nowrap"
                                            key={columnIndex}
                                            {...column.getHeaderProps(
                                                column.getSortByToggleProps()
                                            )}
                                            aria-label={`Sort by ${column.render(
                                                "Header"
                                            )}`}
                                            aria-sort={
                                                column.isSorted
                                                    ? column.isSortedDesc
                                                        ? "descending"
                                                        : "ascending"
                                                    : "none"
                                            }>
                                            {column.render("Header")}{" "}
                                            <button
                                                className="text-sm text-custom-502 pl-1"
                                                aria-label={`Sort by ${
                                                    column.isSorted
                                                        ? column.isSortedDesc
                                                            ? "descending"
                                                            : "ascending"
                                                        : "ascending"
                                                }`}>
                                                {!column.isSorted && (
                                                    <i className="fa fa-sort"></i>
                                                )}
                                                {column.isSorted &&
                                                    !column.isSortedDesc &&
                                                    "🔼"}
                                                {column.isSorted &&
                                                    column.isSortedDesc &&
                                                    "🔽"}
                                            </button>
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
                                    tabIndex={0}
                                    className="even:bg-custom-501 hover:bg-custom-503 hover:text-white "
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
            <Pagination
                pageSize={pageSize}
                employeeProfile={employeeProfile}
                combinedData={combinedData}
                pageIndex={pageIndex}
                pageCount={pageCount}
                nextPage={nextPage}
                previousPage={previousPage}
                gotoPage={gotoPage}
            />
        </div>
    );
}

export default EmployeeList;
