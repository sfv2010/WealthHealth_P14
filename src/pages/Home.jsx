import InputField from "../components/InputField";
import SelectField from "../components/SelectField";

function Home() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <div className="mt-10 mx-10 md:mx-20">
                <h2 className="text-3xl text-green-700 font-bold text-center font-youngSerif">
                    Create Employee
                </h2>

                <form id="create-employee" onSubmit={(e) => handleSubmit(e)}>
                    <div className="flex flex-col items-center mt-12 mb-10 font-lato lg:flex-row lg:justify-around">
                        <div className="w-full max-w-2xl lg:w-1/2">
                            <InputField label="First Name" />
                            <InputField label="Last Name" />
                            <InputField
                                label="Date of Birth"
                                placeholder="mm/dd/yyyy"
                            />
                            <InputField
                                label="Start Date"
                                placeholder="mm/dd/yyyy"
                            />
                            <SelectField label="Department" />
                        </div>
                        <fieldset className="w-full max-w-2xl border border-gray-400 rounded p-4 lg:w-5/12 lg:px-10">
                            <legend className="text-xl text-gray-500 font-bold text-center">
                                Address
                            </legend>
                            <InputField label="Street" />
                            <InputField label="City" />
                            <SelectField label=" State" />
                            <InputField label=" Zip Cod" type="number" />
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
            </div>

            <div id="confirmation" className="modal">
                Employee Created!
            </div>
        </>
    );
}

export default Home;
