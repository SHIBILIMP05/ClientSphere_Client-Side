import { Route, Routes } from "react-router-dom"
import MainLayout from "../../features/head/MainLayout"


const EmployeesPage = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={''} />
            </Routes>
        </MainLayout>
    )
}
export default EmployeesPage