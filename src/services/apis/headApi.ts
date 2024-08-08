import axios from "axios";
import { HeadDetails } from "../../interfaces/LogInterface";

const instance = axios.create({
    baseURL:'http://localhost:5000'
})


export const headLogin = async(data:HeadDetails)=>{
    const response = await instance.post('/api/auth/head/login',data)
    console.log("head response ===>",response);
    
    return response.data
}