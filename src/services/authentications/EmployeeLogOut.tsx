import { Children_I } from "../../interfaces/LogInterface";
import { Navigate } from "react-router-dom";


const EmployeeLogOutAuth = ({children}:Children_I)=>{
const token = Boolean(localStorage.getItem("employeToken"))
return token?<Navigate to='/employee/dashboard' />:children
}

export default EmployeeLogOutAuth