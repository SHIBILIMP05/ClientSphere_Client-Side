import { Route, Routes } from "react-router-dom"
import Profile from "../../features/admin/Profile"
import MainLayout from "../../features/admin/MainLayout"


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