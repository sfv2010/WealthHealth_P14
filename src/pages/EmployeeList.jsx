import { useTable, useSortBy } from "react-table";
import { columns, data } from "../data/table";
import { useEmployeeProfile } from "../context/EmployeeProfileContext";
import { useMemo } from "react";

function EmployeeList() {
    const { employeeProfile } = useEmployeeProfile();
    const newEmployee = useMemo(() => {
        return {
            FirstName: employeeProfile.FirstName,
            LastName: employeeProfile.LastName,
            StartDate: employeeProfile.StartDate,
            Department: employeeProfile.Department,
            DateBirth: employeeProfile.DateBirth,
            Street: employeeProfile.Street,
            City: employeeProfile.City,
            State: employeeProfile.State,
            ZipCode: employeeProfile.ZipCode,
        };
    }, [employeeProfile]);
    // const [addData, setAddData] = useState([newEmployee]);

    // // useEffect(() => {
    // //     setAddData((prevData) => [...prevData, newEmployee]);
    // // }, []);
    // useEffect(() => {
    //     if (
    //         !addData.some(
    //             (employee) => employee.FirstName === newEmployee.FirstName
    //         )
    //     ) {
    //         setAddData((prevData) => [...prevData, newEmployee]);
    //     }
    // }, [newEmployee, addData]);
    // const updatedData = useMemo(() => {
    //     return [...data, ...addData];
    // }, [data, addData]);
    // //const updatedData = data.concat(addData);
    // console.log("update", updatedData, "adddata", addData);
    const sortedData = useMemo(() => {
        const combinedData =
            newEmployee && newEmployee.FirstName !== undefined
                ? [...data, newEmployee]
                : data;
        console.log(combinedData);

        // Get sort key and direction
        const sortColumn = columns.find((column) => column.isSorted);
        const sortKey = sortColumn ? sortColumn.accessor : undefined;
        const isSortedDesc = sortColumn ? sortColumn.isSortedDesc : false;

        if (sortKey) {
            return combinedData.sort((a, b) => {
                if (isSortedDesc) {
                    return b[sortKey].localeCompare(a[sortKey]);
                } else {
                    return a[sortKey].localeCompare(b[sortKey]);
                }
            });
        }

        // Do not sort if there is no sort key
        return combinedData;
    }, [newEmployee]);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable(
            {
                columns,
                // data,
                data: sortedData,
            },
            useSortBy
        );

    return (
        <div className="mt-20 mx-4 lg:mx-10 xl:mx-32">
            <h1 className="text-3xl text-green-700 font-bold text-center font-youngSerif mb-20">
                Current Employees
            </h1>
            <div className="w-full overflow-x-auto">
                <table
                    {...getTableProps()}
                    className="w-full table-fixed border-solid border-2 border-green-800 border-spacing-0 shadow-md box-border ">
                    <thead>
                        {headerGroups.map((headerGroup, headerGroupIndex) => (
                            <tr
                                key={headerGroupIndex}
                                {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(
                                    (column, columnIndex) => (
                                        <th
                                            className="border-solid border-2 border-green-800 bg-custom-500 text-white font-lato p-1 w-[100px] text-xs lg:text-base"
                                            key={columnIndex}
                                            {...column.getHeaderProps(
                                                column.getSortByToggleProps()
                                            )}>
                                            {column.render("Header")}{" "}
                                            <span className="text-xs text-custom-502">
                                                {!column.isSorted && "▲"}
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
                        {rows.map((row, rowIndex) => {
                            prepareRow(row);
                            return (
                                <tr
                                    className="even:bg-custom-501 hover:bg-custom-502 hover:text-white "
                                    key={rowIndex}
                                    {...row.getRowProps()}>
                                    {row.cells.map((cell, cellIndex) => {
                                        return (
                                            <td
                                                className="text-center font-lato border-solid border-2 border-green-800 p-1 text-xs lg:text-base"
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
        </div>
    );
}

export default EmployeeList;
