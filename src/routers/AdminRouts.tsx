import { Route,Routes } from "react-router-dom"
import AdminLogAuth from "../services/authentications/AdminLogAuth"
import Dashboard from "../pages/admin/Dashboard"
import Login from "../pages/admin/Login"
import AdminLogOutAuth from "../services/authentications/AdminLogOutAuth"
const AdminRouts: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<AdminLogOutAuth><Login/></AdminLogOutAuth>} />
        <Route path="/dashboard" element={<AdminLogAuth><Dashboard/></AdminLogAuth>} />
        <Route path="/login" element={<AdminLogOutAuth><Login/></AdminLogOutAuth>} />
    </Routes>
  )
}

export default AdminRouts