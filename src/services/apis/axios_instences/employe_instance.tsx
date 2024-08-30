import axios from "axios";
import { Bounce, toast } from "react-toastify";

// Employee Instance
const employeInstance = axios.create({
    baseURL: 'http://localhost:5000'
})

// Intercepting Response 
employeInstance.interceptors.response.use((res) => {

    console.log("IIres---", res);
    return res

}, (err) => {
    console.log("IIerr====>", err);
    const statusCode = err.response.status
    console.log("statusCode", statusCode);

    switch (statusCode) {
        case 400:
            toast.warning(err.response.data.employe.message, {
                position: "top-center",
                autoClose: 7000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            break
        case 401:
            const errorMessage = `
            <strong>${err.response.data.employe.message}</strong><br/>
            Access denied. Please contact your administrator.`;
            
            toast.warning(<div dangerouslySetInnerHTML={{ __html: errorMessage }} />, {
                position: "top-center",
                autoClose: 7000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
            setTimeout(() => {
                const token = localStorage.getItem('employeToken')
                if (token) {
                    localStorage.removeItem("employeToken")
                }
                window.location.href = '/employee/login'
            }, 6500)
            break
        default:
            console.log('other error');
    }
})


export default employeInstance