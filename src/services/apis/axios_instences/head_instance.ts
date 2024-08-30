import axios from "axios";


const headInstance = axios.create({
    baseURL: 'http://localhost:5000'
})

export default headInstance