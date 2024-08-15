import axios from "axios";
import { AdminDetails } from "../../interfaces/LogInterface";
import { EmployeeDetails } from "../../interfaces/AdminEmployeeInterfaces";


const instance = axios.create({
    baseURL: 'http://localhost:5000'
})

export const adminLogin = async (data: AdminDetails) => {
    try {

        console.log("before", data);
        const response = await instance.post('/api/auth/admin/login', data)
        console.log("rsponse in client-side::", response);
        return response.data
    } catch (error) {
        console.error(error);

    }

}

export const adminCreateEmploye = async (employeeDetails: EmployeeDetails) => {
    try {
        const response = await instance.post('/api/admin/createEmployee', employeeDetails)
        console.log("createEmploye-Response:", response);
        return response.data

    } catch (error) {
        console.error(error);

    }
}

export const listEmploye = async ()=>{
    try {
        const response = await instance.get('/api/admin/listEmployee')
        console.log("EmployeesList => ",response);
        return response.data
        
    } catch (error) {
        console.error(error);
        
    }
}