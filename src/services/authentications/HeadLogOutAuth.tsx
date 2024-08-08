import { Navigate } from "react-router-dom"
import { Children_I } from "../../interfaces/LogInterface"

const HeadLogOutAuth = ({children}:Children_I) => {
const token = Boolean(localStorage.getItem("headToken"))
return token?<Navigate to="/head/dashboard"/>:children 

}

export default HeadLogOutAuth