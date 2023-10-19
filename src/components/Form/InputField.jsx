import PropTypes from "prop-types";
import { useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function InputField({
    label,
    type = "text",
    placeholder = "",
    register,
    errors,
}) {
    const name = label.replaceAll(" ", "");
    const initialDate = new Date();
    const [startDate, setStartDate] = useState(initialDate);
    // const handleChange = (date) => {
    //     setStartDate(date);
    // };

    return (
        <div className="mb-6">
            <label className="block text-black font-bold  pr-4" htmlFor={name}>
                {label}
                <span className="text-red-500"> *</span>
            </label>
            {type === "date" ? (
                <div className="relative">
                    <i className="absolute left-2 top-2 text-gray-400 fa fa-calendar"></i>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700 lg:w-10/12"
                        type="date"
                        id={name}
                        name={name}
                        value={startDate.toISOString().slice(0, 10)}
                        {...register(name, { required: true })}
                        onChange={(e) => setStartDate(new Date(e.target.value))}
                    />
                </div>
            ) : (
                // <DatePicker
                //     className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700 "
                //     selected={startDate}
                //     onChange={handleChange}
                //     dateFormat="MM/dd/yyyy"

                //     // id={name}
                //     // name={name}
                //     // {...register(name, { required: true })}
                // />

                // <DatePicker
                //     dateFormat="MM/dd/yyyy"
                //     maxDate={startDate}
                //     selected={startDate}
                //     onChange={handleChange}
                //     customInput={
                //         <div className="relative">
                //             <i className="absolute left-2 top-2 text-gray-400 fa fa-calendar"></i>
                //             <input
                //                 className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700 lg:w-10/12"
                //                 type="date"
                //                 id={name}
                //                 name={name}
                //                 value={startDate.toISOString().slice(0, 10)}
                //                 {...register(name, { required: true })}
                //                 onChange={(e) =>
                //                     setStartDate(new Date(e.target.value))
                //                 }
                //             />
                //         </div>
                //     }
                // />
                <input
                    className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700 lg:w-10/12"
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    {...register(name, { required: true })}
                />
            )}

            <p className="text-red-500">{errors}</p>
        </div>
    );
}
InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    register: PropTypes.func,
    errors: PropTypes.string,
};

export default InputField;
