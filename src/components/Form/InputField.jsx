import PropTypes from "prop-types";
import { useState } from "react";
import { format, getMonth, getYear } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "font-awesome/css/font-awesome.min.css";

function InputField({
    label,
    type = "text",
    placeholder = "",
    register,
    setValue,
    errors,
}) {
    const name = label.replaceAll(" ", "");
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
    // const inputValue = selectDate;

    // if (inputValue > initialDate) {
    // }

    const handleChange = (date) => {
        setSelectDate(date);
        const formattedDate = format(date, "MM/dd/yyyy");
        setValue(name, formattedDate, { shouldValidate: true });
        console.log(date);
    };

    return (
        <div className="mb-6 w-full">
            <label className="block text-black font-bold pb-1" htmlFor={name}>
                {label}
                <span className="text-red-500"> *</span>
            </label>
            {type === "date" ? (
                <div className="grid">
                    <DatePicker
                        dateFormat="MM/dd/yyyy"
                        maxDate={selectDate}
                        selected={selectDate}
                        onChange={handleChange}
                        className="w-full"
                        customInput={
                            <div className="relative">
                                <i className="absolute right-5 top-3 text-green-700 fa fa-calendar"></i>
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700 "
                                    type="text"
                                    id={name}
                                    name={name}
                                    placeholder="mm/dd/yyyy"
                                    // value={format(selectDate, "MM/dd/yyyy")}
                                    {...register(name, { required: true })}
                                    onChange={(e) =>
                                        setSelectDate(new Date(e.target.value))
                                    }
                                />
                            </div>
                        }
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
                    className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700 "
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
    setValue: PropTypes.func,
    errors: PropTypes.string,
};

export default InputField;
