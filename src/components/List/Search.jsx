import PropTypes from "prop-types";
function Search({ searchValue, setSearchValue, setGlobalFilter }) {
    return (
        <div className="flex items-center mt-3 md:mt-0">
            <label className="block text-black  pr-2" htmlFor="search">
                Search
            </label>
            <input
                className="border-2 rounded  border-gray-200 p-1 text-gray-700 leading-tight focus:outline-green-700  md:p-2"
                type="text"
                id="search"
                value={searchValue}
                onChange={(e) => {
                    const value = e.target.value;
                    setSearchValue(value);
                    setGlobalFilter(value);
                }}
                placeholder="Search by ..."
            />
        </div>
    );
}
Search.propTypes = {
    searchValue: PropTypes.string,
    setSearchValue: PropTypes.func,
    setGlobalFilter: PropTypes.func,
};

export default Search;
