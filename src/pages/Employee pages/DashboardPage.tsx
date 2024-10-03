import { Route, Routes } from "react-router-dom"
import Dashboard from "../../features/employee/Dashboard"
import MainLayout from "../../features/employee/MainLayout"


const DashboardPage = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </MainLayout>
    )
}
export default DashboardPage