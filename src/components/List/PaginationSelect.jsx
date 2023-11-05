import PropTypes from "prop-types";
function PaginationSelect({ pageSize, setPageSize }) {
    return (
        <div>
            <label htmlFor="select">Show</label>
            <select
                value={pageSize}
                onChange={(e) => {
                    setPageSize(Number(e.target.value));
                }}
                id="select"
                className="mx-1 border-2 border-gray-200 rounded-md focus:outline-green-700">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <span>entries</span>
        </div>
    );
}

PaginationSelect.propTypes = {
    pageSize: PropTypes.number,
    setPageSize: PropTypes.func,
};

export default PaginationSelect;
