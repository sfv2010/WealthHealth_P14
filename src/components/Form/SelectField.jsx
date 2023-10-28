import PropTypes from "prop-types";
function SelectField({ label, control, errors, options }) {
    const { name, value, onChange } = control;
    return (
        <div className="mb-6">
            <label className="block text-black font-bold  pr-4" htmlFor={name}>
                {label}
                <span className="text-red-500"> *</span>
            </label>
            <select
                className="bg-gray-200 border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700 md:w-11/12 lg:w-10/12"
                name={name}
                id={name}
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}>
                <option value="" disabled>
                    Please select
                </option>
                {options.map((option) => (
                    <option key={option.name} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
            <p className="text-red-500">{errors}</p>
        </div>
    );
}
SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array,
    register: PropTypes.func,
    errors: PropTypes.string,
    control: PropTypes.object,
};

export default SelectField;
