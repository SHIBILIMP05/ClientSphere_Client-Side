import { Route, Routes } from "react-router-dom"
import MainLayout from "../../features/employee/MainLayout"
import Profile from "../../features/employee/Profile"


const ProfilePage = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Profile />} />
            </Routes>
        </MainLayout>
    )
}
export default ProfilePage