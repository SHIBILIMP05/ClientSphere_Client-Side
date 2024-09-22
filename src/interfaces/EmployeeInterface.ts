export interface EmployeeDataInterface {
    _id: string
    name: string
    phone?: string
    email: string
    position?: string
    password?: string
    image?: string,
    address?: string,
    city?: string,
    country?: string,
    pinCode?: string,
    is_teamLead?: boolean
    is_restricted?: boolean
}