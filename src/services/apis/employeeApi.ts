import { EmployeeDetails } from "../../interfaces/LogInterface";
import { ProfileDetails } from "../../interfaces/AdminProfileInterfaces";
import employeInstance from "./axios_instences/employe_instance.tsx";
import { LeadData } from "../../interfaces/LeadsInterfaces.ts";


export const employeeLogin = async (data: EmployeeDetails) => {
    const response = await employeInstance.post('api/auth/employe/login', data)
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

        const response = await employeInstance.post(`/api/employee/${id}/editProfile`, data, config)

        console.log("read response=====>", response.data);
        return response.data


    } catch (error) {
        console.error(error);
        throw error
    }
}

export const listMyLeads = async (empId: string, page: number, debouncedSearch?: string, selectedStatus?: string[], selectedDate?: string) => {
    try {

        const params = new URLSearchParams()
        if (debouncedSearch) params.append('search', debouncedSearch)
        if (selectedStatus && selectedStatus.length > 0) params.append('status', selectedStatus.join(','))
        if (selectedDate) params.append('date', selectedDate)

        const response = await employeInstance.get(`/api/employee/${empId}/listMyLeads/${page}?${params.toString()}`)
        return response.data
    } catch (error) {
        console.error(error);

    }
}

export const fetchLeadInfo = async (leadId: string, empId: string) => {
    try {
        const response = await employeInstance.get(`/api/employee/${empId}/fetchLeadInfo/${leadId}`)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export const updateLeadInfo = async (empId: string, leadData: LeadData, leadId: string) => {
    try {
        console.log("leadDetail", leadData);
        const response = await employeInstance.post(`/api/employee/${empId}/updateLeadInfo/${leadId}`, { leadData: leadData })
        return response.data
    } catch (error) {
        console.error(error);

    }
}

export const listHistory = async (empId: string) => {
    try {
        const response = await employeInstance.get(`/api/employee/${empId}/listHistory`)
        return response.data
    } catch (error) {
        console.error(error);

    }
}

export const addLead = async (empId: string, leadData: LeadData) => {
    try {
        const response = await employeInstance.post(`/api/employee/${empId}/addLead`, { leadData: leadData })
        return response.data
    } catch (error) {
        console.error(error);

    }
}

export const uplodExcelFile = async (file: File, empId: string) => {
    try {
        console.log("file",file);
        
        const formData = new FormData();
        formData.append('excelFile', file);
        const response = await employeInstance.post(`/api/employee/${empId}/upload-excelFile`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        return response.data
    } catch (error) {
        console.error(error);

    }
}