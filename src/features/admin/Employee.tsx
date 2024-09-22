
import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard"
import EmployeeForm from "./EmployeeForm";
import Modal from "../../components/Modal";
import { listEmploye } from "../../services/apis/adminApi";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { EmployeeDataInterface } from "../../interfaces/EmployeeInterface";



const Employee = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [employeeList, setEmployeeList] = useState<EmployeeDataInterface[]>([])
    const [is_block, setIs_block] = useState(false)
    const [page, setPage] = useState<number>(0);
    const [pageCount, setPageCount] = useState(0)

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const employeeList = listEmploye(page)
        console.log(employeeList);

        employeeList.then((data) => {
            console.log("helloooo", data);
            setEmployeeList(data.employeList.employeList)
            console.log("pagecount==>", data.employeList.count);

            setPageCount(data.employeList.count)
        })

    }, [is_block, isModalOpen, page])



    console.log("aftervaluueee ===", page);
    console.log("pagecount==>", pageCount);


    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value - 1)
        console.log("beforvaluueee ===", page);
    };

    return (
        <>
            <div className="flex justify-between items-center mt-2 mb-2">
                <input
                    type="text"
                    placeholder="Search"
                    className="border border-gray-300 rounded-3xl text-lg  px-5 w-[322px] h-9"
                />
                <button onClick={openModal} className="w-[172px] h-9 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors duration-300 ease-in-out">
                    Create Employee
                </button>
            </div>

            {/* Employees Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
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

            <div className="flex justify-between mt-3 fixed bottom-5 ">
                <h1 className="font-semibold text-[#7D50E1] ml-5">Page: {page+1}</h1>
                <Stack className="fixed right-5">
                    <Pagination count={pageCount} shape="rounded" color="standard" onChange={handleChange} />
                </Stack>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Employee">
                <EmployeeForm closeModal_1={closeModal} />
            </Modal>
        </>
    )
}

export default Employee