import { Route, Routes } from "react-router-dom"
import MainLayout from "../../features/admin/MainLayout"
import Employee from "../../features/admin/Employee"

const EmployeePage = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Employee />} />
            </Routes>
        </MainLayout>
    )
}
export default EmployeePage