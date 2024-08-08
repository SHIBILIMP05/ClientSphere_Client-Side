import { Route,Routes } from "react-router-dom"
import AdminLogAuth from "../services/authentications/AdminLogAuth"
import AdminPage from "../pages/AdminPage"
import AdminLogOutAuth from "../services/authentications/AdminLogOutAuth"
import Login from "../features/common/Login"
interface position{
  position:string
}
const AdminRouts = ({position}:position) => {
  return (
    <Routes>
        <Route path="/" element={<AdminLogOutAuth><Login position={position} /></AdminLogOutAuth>} />
        <Route path="/dashboard" element={<AdminLogAuth><AdminPage/></AdminLogAuth>} />
        <Route path="/login" element={<AdminLogOutAuth><Login position={position} /></AdminLogOutAuth>} />
    </Routes>
  )
}

export default AdminRouts