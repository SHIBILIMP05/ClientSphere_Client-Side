import { Route, Routes } from "react-router-dom"
import MainLayout from "../../features/head/MainLayout"


const MessengerPage = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={''} />
            </Routes>
        </MainLayout>
    )
}
export default MessengerPage