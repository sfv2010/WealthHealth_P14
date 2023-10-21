import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import { format, isDate, getMonth, getYear } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "font-awesome/css/font-awesome.min.css";

function InputField({
    label,
    type = "text",
    placeholder = "",
    control,
    errors,
}) {
    const { name, value, onChange } = control;
    const initialDate = new Date();
    const [selectDate, setSelectDate] = useState(initialDate);

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

    useEffect(() => {
        if (isDate(value)) {
            setSelectDate(value);
        }
        console.log(value);
    }, [value, selectDate]);

    const handleDateChange = (date) => {
        const formattedDate = date ? format(date, "MM/dd/yyyy") : "";
        onChange(formattedDate);
        console.log(formattedDate);
    };

    return (
        <div className="mb-6">
            <label className="block text-black font-bold  pr-4" htmlFor={name}>
                {label}
                <span className="text-red-500"> *</span>
            </label>
            {type === "date" ? (
                <div className="grid">
                    <DatePicker
                        selected={value ? new Date(value) : null}
                        minDate={new Date(1940, 0, 1)}
                        maxDate={initialDate}
                        onChange={handleDateChange}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="  Please select a date"
                        showIcon
                        icon="fa fa-calendar"
                        id={name}
                        name={name}
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
                    className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700 md:w-11/12 lg:w-10/12"
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value || ""}
                    onChange={(e) => onChange(e.target.value)}
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
    control: PropTypes.object,
    errors: PropTypes.string,
    trigger: PropTypes.objectOf(PropTypes.func),
};

export default InputField;
