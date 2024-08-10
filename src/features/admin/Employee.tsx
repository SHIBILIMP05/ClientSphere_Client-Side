
import { useState } from "react";
import EmployeeCard from "./EmployeeCard"
import EmployeeForm from "./EmployeeForm";
import Modal from "../../components/Modal";


const Employee = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const employees = [
        {
            name: "Jukkoe Sisa",
            phone: "+91 8934357834",
            email: "sibyl_kozey@gmail.com",
            imageUrl: "/path-to-image2.jpg",
        },
        {
            name: "Jason Price",
            phone: "+91 8934357834",
            email: "janick_parisian@yahoo.com",
            imageUrl: "/path-to-image1.jpg",
        },
        {
            name: "Jukkoe Sisa",
            phone: "+91 8934357834",
            email: "sibyl_kozey@gmail.com",
            imageUrl: "/path-to-image2.jpg",
        },
        {
            name: "Jukkoe Sisa",
            phone: "+91 8934357834",
            email: "sibyl_kozey@gmail.com",
            imageUrl: "/path-to-image2.jpg",
        }
        // Add more employee data here
    ];
    return (
        <>
            <div className="flex justify-between items-center mt-8 mb-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="border border-gray-300 rounded-lg p-2"
                />
                <button onClick={openModal} className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out">
                    Create Employee +
                </button>
            </div>

            {/* Employees Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {employees.map((employee, index) => (
                    <EmployeeCard
                        key={index}
                        name={employee.name}
                        phone={employee.phone}
                        email={employee.email}
                        imageUrl={employee.imageUrl}
                    />
                ))}
            </div>
            {/* Modal for Creating Employee */}
            <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Employee">
                <EmployeeForm closeModal_1={closeModal} />
            </Modal>
        </>
    )
}

export default Employee