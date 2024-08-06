import axios from "axios";
import { AdminDetails } from "../../interfaces/LogInterface";


const instance = axios.create({
    baseURL:'http://localhost:5000'
})

export const adminLogin =async (data:AdminDetails)=>{
    console.log("before",data);
    const response = await instance.post('/admin/login',data)
    console.log("rsponse in clitside::",response);
    

    
}