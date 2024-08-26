
import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard"
import EmployeeForm from "./EmployeeForm";
import Modal from "../../components/Modal";
import { listEmploye } from "../../services/apis/adminApi";

interface Employees{
    name:string
    email:string
    phone:string
    image:string
    _id:string
    is_restricted:boolean
}

const Employee = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [employeeList,setEmployeeList] = useState<Employees[]>([])
    const [is_block,setIs_block]= useState(false)
    

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(()=>{
        const employeeList = listEmploye()
        console.log(employeeList); 
        
        employeeList.then((data)=>{
            console.log("helloooo",data);
            setEmployeeList(data.employeList.employeList)
            
        })
    },[is_block,isModalOpen])

   
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
                {employeeList.map((employee, index) => (
                    <EmployeeCard
                        key={index}
                        name={employee.name}
                        phone={employee.phone}
                        email={employee.email}
                        imageUrl={employee.image}
                        id={employee._id}
                        is_restricted={employee.is_restricted}
                        is_block={is_block}
                        setIs_block={setIs_block}
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