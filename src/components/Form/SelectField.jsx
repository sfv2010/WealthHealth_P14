import PropTypes from "prop-types";
function SelectField({
    label,
    control,
    errors,
    // options,
}) {
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

// import PropTypes from "prop-types";
// function SelectField({
//     label,
//     register,
//     errors,
//     // options,
// }) {
//     const name = label.replaceAll(" ", "-");
//     return (
//         <div className="mb-6">
//             <label
//                 className="block text-black font-bold pb-1 pr-4"
//                 htmlFor={name}>
//                 {label}
//                 <span className="text-red-500"> *</span>
//             </label>
//             <select
//                 className="bg-gray-200 border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700 "
//                 name={name}
//                 id={name}
//                 {...register(name, { required: true })}>
//                 {/* {options.map((option) => (
//                     <option key={option.value} value={option.value}>
//                         {option.label}
//                     </option>
//                 ))} */}
//                 <option>Sales</option>
//                 <option>Marketing</option>
//                 <option>Engineering</option>
//                 <option>Human Resources</option>
//                 <option>Legal</option>
//             </select>
//             <p className="text-red-500">{errors}</p>
//         </div>
//     );
// }
// SelectField.propTypes = {
//     label: PropTypes.string.isRequired,
//     options: PropTypes.array,
//     register: PropTypes.func,
//     errors: PropTypes.string,
// };

// export default SelectField;
