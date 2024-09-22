import { HeadDetails } from "../../interfaces/LogInterface";
import { ProfileDetails } from "../../interfaces/AdminProfileInterfaces";
import headInstance from "./axios_instences/head_instance";



/* Login */
export const headLogin = async (data: HeadDetails) => {
    const response = await headInstance.post('/api/auth/head/login', data)
    return response.data
}

/* Edit profile */
export const editProfile = async ({ name, email, phone, address, city, country, pinCode, image }: ProfileDetails, id: string) => {
    try {

        const data = new FormData()
        data.append("_id", id)
        data.append("name", name)
        data.append("email", email)
        data.append("address", address)
        data.append("city", city)
        data.append("country", country)
        data.append("pinCode", pinCode)
        data.append("phone", phone)

        if (image) {
            data.append("image", image);
        }

        const config = {
            headers: {
                "content-type": "multipart/form-data",
                userId: id,
            },
            withCredentials: true,
        };

        const response = await headInstance.post('/api/head/editProfile', data, config)
        return response.data
    } catch (error) {
        console.error(error);
        throw error
    }
}

/* List new leads */
export const listNewLeads = async () => {
    try {
        const response = await headInstance.get('/api/head/listNewLeads')
        return response.data
    } catch (error) {
        console.error(error);
    }
}

/* List employees */
export const listEmploye = async () => {
    try {
        
        const response = await headInstance.get('/api/head/listEmployee')
        return response.data
    } catch (error) {
        console.error(error);
    }
}

/* Assign leads to employees */
export const assignLeads =async(empId:string,selectedRows:string[])=>{
    try {
        const response = await headInstance.post(`/api/head/assignLeads/${empId}`,{selectedRows:selectedRows})
        return response.data
    } catch (error) {
        console.error(error);
        
    }
}