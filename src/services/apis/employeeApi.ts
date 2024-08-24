import axios from "axios";
import { EmployeeDetails } from "../../interfaces/LogInterface";
import { ProfileDetails } from "../../interfaces/AdminProfileInterfaces";


const instance = axios.create({
    baseURL: 'http://localhost:5000'
})

export const employeeLogin = async (data: EmployeeDetails) => {
    const response = await instance.post('api/auth/employe/login', data)
    console.log("employee response ===>", response);
    return response.data

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

        const response = await instance.post('/api/employee/editProfile', data, config)
        console.log("read response", response.data);

        return response.data

    } catch (error) {
        console.error(error);
        throw error
    }
}