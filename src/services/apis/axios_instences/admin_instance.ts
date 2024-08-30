import axios from "axios";


const adminInstance = axios.create({
    baseURL: 'http://localhost:5000'
})


export default adminInstance