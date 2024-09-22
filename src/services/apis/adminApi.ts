import { AdminDetails } from "../../interfaces/LogInterface";
import { EmployeeDetails } from "../../interfaces/AdminEmployeeInterfaces";
import { ProfileDetails } from "../../interfaces/AdminProfileInterfaces";
import adminInstance from "./axios_instences/admin_instance";
import { LeadData } from "../../interfaces/LeadsInterfaces";


/* admin login */
export const adminLogin = async (data: AdminDetails) => {
    try {

        const response = await adminInstance.post('/api/auth/admin/login', data)
        return response.data
    } catch (error) {
        console.error(error);

    }

}

/* admin create employee */
export const adminCreateEmploye = async (employeeDetails: EmployeeDetails) => {
    try {
        const response = await adminInstance.post('/api/admin/createEmployee', employeeDetails)
        return response.data

    } catch (error) {
        console.error(error);

    }
}

/* listing employees */
export const listEmploye = async (page:number) => {
    try {
        const response = await adminInstance.get(`/api/admin/listEmployee/${page}`)
        return response.data
    } catch (error) {
        console.error(error);

    }
}

/* restricting employees action */
export const blockEmploye = async (id: string)=> {
    try {
        const response = await adminInstance.get(`/api/auth/employe/${id}/block`)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

/* editing admin profile */
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

        const response = await adminInstance.post('/api/admin/editProfile', data, config)
        return response.data
    } catch (error) {
        console.error(error);
        throw error
    }
}

/* submiting leads data from user-form */
export const submitLeadsData = async(leadData:LeadData)=>{
try {
    const response = await adminInstance.post('/api/admin/addLeadsData',leadData)
    return response.data
} catch (error) {
    console.error(error);
}
}