import { createSlice } from "@reduxjs/toolkit"

export interface initialState_I {
    id: string
    name: string
    email: string
    image: string
    phone:string
    country:string
    address:string
    city:string
    pinCode:string
}

const initialState: initialState_I = {
    id: '',
    name: '',
    email: '',
    image: '',
    phone: '',
    country: '',
    address:'',
    city: '',
    pinCode: '',
}

const employeSlice = createSlice({
    name: 'Employe',
    initialState,
    reducers: {
        employeDetails: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.email = action.payload.email
            state.image = action.payload.image
            state.phone = action.payload.phone
            state.country = action.payload.country
            state.address = action.payload.address
            state.city = action.payload.city
            state.pinCode = action.payload.pinCode
        }
    }

})

export const { employeDetails } = employeSlice.actions
export default employeSlice.reducer;