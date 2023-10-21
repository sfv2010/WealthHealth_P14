import { useForm, Controller } from "react-hook-form";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../schema/validationSchema";
import { useEmployeeProfile } from "../../context/EmployeeProfileContext";

function CreateForm() {
    //CreateForm
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });
    const { employeeProfile, setEmployeeProfile } = useEmployeeProfile();
    const onSubmit = (data) => {
        setEmployeeProfile(data);
        console.log(employeeProfile.FirstName);
        console.log(data);
        reset();
    };

    console.log(errors);
    return (
        <form id="create-employee" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center mt-12 mb-10 font-lato sm:px-28 md:px-1 md:flex-row md:justify-between xl:px-20 xl:justify-center">
                <div className="w-full max-w-2xl md:w-1/2 xl:w-2/5">
                    <Controller
                        name="FirstName"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                label="First Name"
                                control={field}
                                errors={
                                    errors.FirstName && errors.FirstName.message
                                }
                            />
                        )}
                    />
                    <Controller
                        name="LastName"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                label="Last Name"
                                control={field}
                                errors={
                                    errors.LastName && errors.LastName.message
                                }
                            />
                        )}
                    />
                    <Controller
                        name="DateBirth"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                label="Date of Birth"
                                type="date"
                                control={field}
                                errors={
                                    errors.DateBirth && errors.DateBirth.message
                                }
                            />
                        )}
                    />
                    <Controller
                        name="StartDate"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                label="Start Date"
                                type="date"
                                control={field}
                                errors={
                                    errors.StartDate && errors.StartDate.message
                                }
                            />
                        )}
                    />
                    <Controller
                        name="Department"
                        control={control}
                        render={({ field }) => (
                            <SelectField
                                label="Department"
                                control={field}
                                errors={
                                    errors.Department &&
                                    errors.Department.message
                                }
                            />
                        )}
                    />
                </div>
                <fieldset className="w-full max-w-2xl border border-gray-400 rounded p-4 text-center md:w-5/12 xl:w-4/12 xl:p-1 ">
                    <legend className="text-xl text-gray-500 font-bold text-center">
                        Address
                    </legend>
                    <Controller
                        name="Street"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                label="Street"
                                control={field}
                                errors={errors.Street && errors.Street.message}
                            />
                        )}
                    />
                    <Controller
                        name="City"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                label="City"
                                control={field}
                                errors={errors.City && errors.City.message}
                            />
                        )}
                    />
                    <Controller
                        name="State"
                        control={control}
                        render={({ field }) => (
                            <SelectField label=" State" control={field} />
                        )}
                    />
                    <Controller
                        name="ZipCod"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                label="Zip Cod"
                                type="number"
                                control={field}
                                errors={errors.ZipCod && errors.ZipCod.message}
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
