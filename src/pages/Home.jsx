import { useState } from "react";
import Form from "../components/Form/CreateForm";
import Modal from "my-react-modal-sv";
import "my-react-modal-sv/dist/style.css";
function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <main className="mt-10 mx-10 md:mx-20">
                <h2 className="text-[27px] sm:text-3xl text-green-700 font-bold text-center font-youngSerif">
                    Create Employee
                </h2>

                <Form setModalOpen={setIsModalOpen} />
            </main>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h1>Employee created !</h1>
            </Modal>
        </div>
    );
}

export default Home;
