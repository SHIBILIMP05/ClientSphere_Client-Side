import { Route, Routes } from "react-router-dom"
import MainLayout from "../../features/admin/MainLayout"

const HeadPage = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={''} />
            </Routes>
        </MainLayout>
    )
}
export default HeadPage