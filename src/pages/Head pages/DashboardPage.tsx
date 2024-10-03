import { Route, Routes } from "react-router-dom"
import MainLayout from "../../features/head/MainLayout"
import Dashboard from "../../features/head/Dashboard"


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