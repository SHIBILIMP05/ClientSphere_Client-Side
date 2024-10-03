import { Route, Routes } from "react-router-dom"
import MainLayout from "../../features/head/MainLayout"
import SalesList from "../../features/head/SalesList"
import Leads from "../../features/head/Leads"


const SalesAndLeadsPage = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<SalesList />} />
                <Route path="/newLeads" element={<Leads />} />
            </Routes>
        </MainLayout>
    )
}
export default SalesAndLeadsPage