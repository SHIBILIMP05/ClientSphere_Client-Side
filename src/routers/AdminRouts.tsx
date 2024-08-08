import { Route,Routes } from "react-router-dom"
import AdminLogAuth from "../services/authentications/AdminLogAuth"
import Dashboard from "../pages/admin/Dashboard"
import AdminLogOutAuth from "../services/authentications/AdminLogOutAuth"
import Login from "../common features/Login"
interface position{
  position:string
}
const AdminRouts = ({position}:position) => {
  return (
    <Routes>
        <Route path="/" element={<AdminLogOutAuth><Login position={position} /></AdminLogOutAuth>} />
        <Route path="/dashboard" element={<AdminLogAuth><Dashboard/></AdminLogAuth>} />
        <Route path="/login" element={<AdminLogOutAuth><Login position={position} /></AdminLogOutAuth>} />
    </Routes>
  )
}

export default AdminRouts