import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { format, getMonth, getYear } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "font-awesome/css/font-awesome.min.css";
import { useState } from "react";

function InputField({
    label,
    type = "text",
    placeholder = "",
    control,
    errors,
}) {
    const { name, value, onChange } = control;
    const initialDate = new Date();
    const [error, setError] = useState("");
    const range = (start, end, step) => {
        const result = [];
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
        return result;
    };
    const years = range(1940, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const handleDateChange = (date) => {
        //date is passed as a string and converted to a JavaScript Date object by new Date(date).
        const formattedDate = date
            ? format(new Date(date), "MM/dd/yyyy")
            : date;
        onChange(formattedDate);
        setError("");
    };
    const isValidDate = (dateString) => {
        const datePattern =
            /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
        if (!datePattern.test(dateString)) {
            return false;
        }
        const inputDate = new Date(dateString);
        if (inputDate > initialDate) {
            return false;
        }
        return true;
    };

    const handleDateBlur = (e) => {
        const inputDate = e.target.value;

        if (!isValidDate(inputDate)) {
            onChange("");
            setError("Please enter your date of birth in mm/dd/yyyy format");
        }
    };

    return (
        <div className="mb-6">
            <label className="block text-black font-bold  pr-4" htmlFor={name}>
                {label}
                <span className="text-custom-504"> *</span>
            </label>
            {type === "date" ? (
                <div className="grid">
                    <DatePicker
                        selected={value ? new Date(value) : null}
                        minDate={new Date(1940, 0, 1)}
                        maxDate={initialDate}
                        onChange={handleDateChange}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="MM/dd/yyyy Please select"
                        showIcon
                        icon="fa fa-calendar"
                        id={name}
                        name={name}
                        autoComplete="off"
                        onBlur={handleDateBlur}
                        className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700 md:w-11/12 lg:w-10/12"
                        renderCustomHeader={({
                            date,
                            changeYear,
                            changeMonth,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,
                        }) => (
                            <div className="m-2.5 flex justify-center">
                                <button
                                    className="m-2 font-bold hover:text-blue-400 cursor-pointer"
                                    type="button"
                                    onClick={decreaseMonth}
                                    disabled={prevMonthButtonDisabled}>
                                    {"<"}
                                </button>
                                <select
                                    className="mr-3 w-1/3 text-center font-bold rounded-lg hover:text-white hover:bg-blue-700 cursor-pointer"
                                    value={months[getMonth(date)]}
                                    onChange={({ target: { value } }) =>
                                        changeMonth(months.indexOf(value))
                                    }>
                                    {months.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    className=" w-1/3 rounded-lg font-bold text-center  hover:text-white hover:bg-blue-700 cursor-pointer"
                                    value={getYear(date)}
                                    onChange={({ target: { value } }) =>
                                        changeYear(value)
                                    }>
                                    {years.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>

                                <button
                                    className="m-2 font-bold hover:text-blue-300 cursor-pointer"
                                    type="button"
                                    onClick={increaseMonth}
                                    disabled={nextMonthButtonDisabled}>
                                    {">"}
                                </button>
                            </div>
                        )}
                    />
                </div>
            ) : (
                <input
                    className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:outline-green-700 md:w-11/12 lg:w-10/12"
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value || ""}
                    onChange={(e) => onChange(e.target.value)}
                    aria-describedby={`error-message-${name}`}
                />
            )}

            <p
                className="text-custom-504"
                id={`error-message-${name}`}
                aria-live="polite">
                {errors}
            </p>
            {error && (
                <p
                    className="text-custom-504"
                    id="error-message"
                    aria-live="polite">
                    {error}
                </p>
            )}
        </div>
    );
}
InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    control: PropTypes.object,
    errors: PropTypes.string,
    trigger: PropTypes.objectOf(PropTypes.func),
};

export default InputField;
