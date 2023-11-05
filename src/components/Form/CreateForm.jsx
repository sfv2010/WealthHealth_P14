import { useForm, Controller } from "react-hook-form";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../schema/validationSchema";

// import { useEmployeeProfile } from "../../context/EmployeeProfileContext";
import { departments } from "../../data/departements";
import { states } from "../../data/states";
import { useContext } from "react";
import { EmployeeProfileContext } from "../../context/EmployeeProfileContext";

function CreateForm() {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

    const { employeeProfile, addEmployee } = useContext(EmployeeProfileContext);
    const onSubmit = (data) => {
        addEmployee(data);
        // localStorage.setItem("employeeData", JSON.stringify(data));
        reset();
    };
    console.log("employeeProfile", employeeProfile);

    return (
        <form id="create-employee" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center mt-12 mb-10 font-lato sm:px-28 md:px-1 md:flex-row md:justify-between xl:px-20 xl:justify-center">
                <div className="w-full max-w-2xl md:w-1/2 xl:w-2/5">
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                label="First Name"
                                control={field}
                                errors={
                                    errors.firstName && errors.firstName.message
                                }
                            />
                        )}
                    />
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                label="Last Name"
                                control={field}
                                errors={
                                    errors.lastName && errors.lastName.message
                                }
                            />
                        )}
                    />
                    <Controller
                        name="dateOfBirth"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                label="Date of Birth"
                                type="date"
                                control={field}
                                errors={
                                    errors.dateOfBirth &&
                                    errors.dateOfBirth.message
                                }
                                reset={reset}
                            />
                        )}
                    />
                    <Controller
                        name="startDate"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                label="Start Date"
                                type="date"
                                control={field}
                                errors={
                                    errors.startDate && errors.startDate.message
                                }
                            />
                        )}
                    />
                    <Controller
                        name="department"
                        control={control}
                        render={({ field }) => (
                            <SelectField
                                label="Department"
                                control={field}
                                errors={
                                    errors.department &&
                                    errors.department.message
                                }
                                options={departments}
                            />
                        )}
                    />
                </div>
                <fieldset className="w-full max-w-2xl border border-gray-400 rounded p-4 text-center md:w-5/12 xl:w-4/12 md:p-1 ">
                    <legend className="text-xl text-gray-500 font-bold text-center">
                        Address
                    </legend>
                    <Controller
                        name="street"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                label="Street"
                                control={field}
                                errors={errors.street && errors.street.message}
                            />
                        )}
                    />
                    <Controller
                        name="city"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                label="City"
                                control={field}
                                errors={errors.city && errors.city.message}
                            />
                        )}
                    />
                    <Controller
                        name="state"
                        control={control}
                        render={({ field }) => (
                            <SelectField
                                label="State"
                                control={field}
                                errors={errors.state && errors.state.message}
                                options={states}
                            />
                        )}
                    />
                    <Controller
                        name="zipCode"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                label="Zip Code"
                                type="number"
                                control={field}
                                errors={
                                    errors.zipCode && errors.zipCode.message
                                }
                            />
                        )}
                    />
                </fieldset>
            </div>

            <div className="flex justify-center">
                <button
                    className="py-3 lg:py-3 px-14 lg:px-14 text-white-500 font-bold rounded-3xl bg-green-700 hover:bg-green-500 hover:-translate-y-1 transition  duration-300 outline-none text-white"
                    type="submit">
                    Save
                </button>
            </div>
        </form>
    );
}

export default CreateForm;
