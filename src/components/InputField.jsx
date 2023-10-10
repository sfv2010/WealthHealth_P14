import PropTypes from "prop-types";
function InputField({
    // error,
    label,
    type = "text",
    placeholder = "",
}) {
    const name = label.toLowerCase().replaceAll(" ", "-");
    return (
        <div className="mb-6">
            <label className="block text-black font-bold  pr-4" htmlFor={name}>
                {label}
                <span className="text-red-500"> *</span>
            </label>

            <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700 lg:w-10/12"
                type={type}
                id={name}
                placeholder={placeholder}
                // onChange={}
            />
        </div>
    );
}
InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    // value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    // onChange: PropTypes.func.isRequired,
    // id: PropTypes.string.isRequired,
};

export default InputField;
