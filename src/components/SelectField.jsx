import PropTypes from "prop-types";
function SelectField({
    // error,
    label,
    // options,
}) {
    const name = label.toLowerCase().replaceAll(" ", "-");
    return (
        <div className="mb-6">
            <label className="block text-black font-bold  pr-4" htmlFor={name}>
                {label}
                <span className="text-red-500"> *</span>
            </label>
            <select
                className="bg-gray-200 border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700 lg:w-10/12"
                name={name}
                id={name}>
                {/* {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))} */}
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </select>
        </div>
    );
}
SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array,
    // value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    // onChange: PropTypes.func.isRequired,
    // id: PropTypes.string.isRequired,
};

export default SelectField;
