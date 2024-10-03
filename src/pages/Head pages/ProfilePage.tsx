import { Route, Routes } from "react-router-dom"
import MainLayout from "../../features/head/MainLayout"
import Profile from "../../features/head/Profile"


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