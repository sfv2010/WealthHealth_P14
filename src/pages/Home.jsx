import Form from "../components/Form/CreateForm";

function Home() {
    return (
        <main className="mt-10 mx-10 md:mx-20">
            <h2 className="text-3xl text-green-700 font-bold text-center font-youngSerif">
                Create Employee
            </h2>

            <Form />
            <div id="confirmation" className="modal">
                Employee Created!
            </div>
        </main>
    );
}

export default Home;
