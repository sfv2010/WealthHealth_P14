function EmployeeList() {
    return (
        <div className="mt-20 mx-10 md:mx-32">
            <h1 className="text-3xl text-green-700 font-bold text-center font-youngSerif">
                Current Employees
            </h1>
            <table id="employee-table" className="display"></table>
        </div>
    );
}

export default EmployeeList;
