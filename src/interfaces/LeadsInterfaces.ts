import { EmployeeDataInterface } from "./EmployeeInterface";

export interface LeadData {
    _id?: string
    name: string
    email: string;
    phone: string;
    company: string;
    leadSource: string;
    message: string;
    address?: string;
    city?: string;
    country?: string,
    pinCode?: string,
    lead_holder?: EmployeeDataInterface
    lead_status?: string
    date?: Date
}