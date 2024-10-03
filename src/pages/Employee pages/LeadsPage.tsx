import { Route, Routes } from "react-router-dom"
import MainLayout from "../../features/employee/MainLayout"
import Leads from "../../features/employee/Leads"


const LeadsPage = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Leads />} />
            </Routes>
        </MainLayout>
    )
}
export default LeadsPage