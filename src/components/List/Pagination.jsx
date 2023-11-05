import PropTypes from "prop-types";
function Pagination({
    pageSize,
    pageIndex,
    pageCount,
    //employeeProfile,
    combinedData,
    nextPage,
    previousPage,
    gotoPage,
}) {
    return (
        <div className="text-xs sm:text-base sm:flex justify-between items-center mt-2 ">
            <div className="block text-black pr-2 my-4">
                Showing <span>{pageIndex * pageSize + 1}</span> to{" "}
                <span>
                    {pageIndex === pageCount - 1
                        ? // ? employeeProfile.length
                          combinedData.length
                        : (pageIndex + 1) * pageSize}
                </span>{" "}
                of <span>{combinedData.length}</span> entries{" "}
            </div>
            <div className="block text-black pr-2">
                <button
                    className={`py-1 px-2 mr-1 sm:py-2 sm:px-4 rounded bg-gray-300  hover:bg-custom-502 hover:text-white  ${
                        pageIndex === 0
                            ? "opacity-40  hover:bg-gray-200 hover:text-black"
                            : ""
                    }`}
                    onClick={() => previousPage()}
                    disabled={pageIndex === 0}>
                    Previous
                </button>
                {Array.from({ length: pageCount }, (_, i) => (
                    <span
                        key={i}
                        className={`border-2 border-custom-501 py-1 px-2 mx-px sm:py-2 sm:px-4  hover:border-custom-500 rounded cursor-pointer ${
                            pageIndex === i ? "bg-custom-501" : ""
                        } `}
                        onClick={() => {
                            if (pageIndex !== i) {
                                gotoPage(i);
                            }
                        }}>
                        {i + 1}
                    </span>
                ))}
                <button
                    className={`py-1 px-2 mr-1 sm:py-2 sm:px-4 rounded bg-gray-300 hover:bg-custom-502 hover:text-white ${
                        pageIndex >= pageCount - 1
                            ? "opacity-40 hover:bg-gray-200 hover:text-black"
                            : ""
                    }`}
                    onClick={() => nextPage()}
                    disabled={pageIndex >= pageCount - 1}>
                    Next
                </button>
            </div>
        </div>
    );
}

Pagination.propTypes = {
    pageSize: PropTypes.number,
    pageIndex: PropTypes.number,
    pageCount: PropTypes.number,
    // employeeProfile: PropTypes.array,
    combinedData: PropTypes.array,
    nextPage: PropTypes.func,
    previousPage: PropTypes.func,
    gotoPage: PropTypes.func,
};

export default Pagination;
