import { Route, Routes } from "react-router-dom"
import Dashboard from "../../features/admin/Dashboard"
import MainLayout from "../../features/admin/MainLayout"

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