import { Route, Routes } from "react-router-dom"
import MainLayout from "../../features/employee/MainLayout"
import Leads from "../../features/employee/Leads"
import LeadDetails from "../../features/employee/LeadDetails"


const LeadsPage = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Leads />} />
                <Route path="/info/:leadId" element={<LeadDetails />} />
            </Routes>
        </MainLayout>
    )
}
export default LeadsPage