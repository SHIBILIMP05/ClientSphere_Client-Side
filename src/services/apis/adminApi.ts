import { AdminDetails } from "../../interfaces/LogInterface";
import { EmployeeDetails } from "../../interfaces/AdminEmployeeInterfaces";
import { ProfileDetails } from "../../interfaces/AdminProfileInterfaces";
import adminInstance from "./axios_instences/admin_instance";



export const adminLogin = async (data: AdminDetails) => {
    try {

        console.log("before", data);
        const response = await adminInstance.post('/api/auth/admin/login', data)
        console.log("rsponse in client-side::", response);
        return response.data
    } catch (error) {
        console.error(error);

    }

}

export const adminCreateEmploye = async (employeeDetails: EmployeeDetails) => {
    try {
        const response = await adminInstance.post('/api/admin/createEmployee', employeeDetails)
        console.log("createEmploye-Response:", response);
        return response.data

    } catch (error) {
        console.error(error);

    }
}

export const listEmploye = async (page:number) => {
    try {
        console.log("pagenumber",page);
        const response = await adminInstance.get(`/api/admin/listEmployee/${page}`)
        console.log("EmployeesList => ", response);
        return response.data
    } catch (error) {
        console.error(error);

    }
}

export const blockEmploye = async (id: string)=> {
    try {
        const response = await adminInstance.get(`/api/auth/employe/${id}/block`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

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
        console.log("hello i landed");

        const response = await adminInstance.post('/api/admin/editProfile', data, config)
        console.log("read response", response.data);

        return response.data

    } catch (error) {
        console.error(error);
        throw error
    }
}