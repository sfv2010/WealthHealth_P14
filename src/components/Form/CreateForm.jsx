import { useForm } from "react-hook-form";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../schema/validationSchema";
import { useEmployeeProfile } from "../../context/EmployeeProfileContext";

function CreateForm() {
    const {
        setValue,
        register,
        handleSubmit,
        reset,
        formState: { errors },
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
            <div className="flex flex-col items-center mt-12 mb-10 font-lato lg:flex-row lg:justify-around ">
                <div className="w-full max-w-2xl lg:w-1/2 sm:px-24">
                    <InputField
                        label="First Name"
                        register={register}
                        errors={errors.FirstName && errors.FirstName.message}
                    />
                    <InputField
                        label="Last Name"
                        register={register}
                        errors={errors.LastName && errors.LastName.message}
                    />

                    <InputField
                        label="Date of Birth"
                        type="date"
                        register={register}
                        setValue={setValue}
                        errors={
                            errors.DateofBirth && errors.DateofBirth.message
                        }
                    />

                    <InputField
                        label="Start Date"
                        type="date"
                        register={register}
                        setValue={setValue}
                        errors={errors.StartDate && errors.StartDate.message}
                    />

                    <SelectField
                        label="Department"
                        register={register}
                        errors={errors.Department && errors.Department.message}
                    />
                </div>
                <fieldset className="w-full max-w-2xl border border-gray-400 rounded px-6 lg:w-5/12  sm:px-24 lg:px-10">
                    <legend className="text-xl text-gray-500 font-bold text-center ">
                        Address
                    </legend>
                    <InputField
                        label="Street"
                        register={register}
                        errors={errors.Street && errors.Street.message}
                    />
                    <InputField
                        label="City"
                        register={register}
                        errors={errors.City && errors.City.message}
                    />
                    <SelectField label=" State" register={register} />
                    <InputField
                        label="Zip Cod"
                        type="number"
                        register={register}
                        errors={errors.ZipCod && errors.ZipCod.message}
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
