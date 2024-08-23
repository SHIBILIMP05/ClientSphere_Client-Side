import axios from "axios";
import { EmployeeDetails } from "../../interfaces/LogInterface";


const instance = axios.create({
    baseURL:'http://localhost:5000'
})

export const  employeeLogin = async (data:EmployeeDetails)=>{
    const response = await instance.post('api/auth/employe/login',data)
    console.log("employee response ===>",response);
    return response.data
    
}