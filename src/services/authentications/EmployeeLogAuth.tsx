import { Children_I } from "../../interfaces/LogInterface";
import { Navigate } from "react-router-dom";


const EmployeeLogAuth = ({ children }: Children_I) => {
    const token = Boolean(localStorage.getItem("employeToken"))
    return token ? children : <Navigate to='/employee/login' />
}

export default EmployeeLogAuth