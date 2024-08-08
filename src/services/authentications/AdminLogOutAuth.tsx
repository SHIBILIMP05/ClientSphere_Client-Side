import { Navigate } from "react-router-dom"
import { Children_I } from "../../interfaces/LogInterface"

const AdminLogOutAuth = ({children}:Children_I) => {
const token = Boolean(localStorage.getItem("adminToken"))
return token?<Navigate to="/admin/dashboard"/>:children 

}

export default AdminLogOutAuth