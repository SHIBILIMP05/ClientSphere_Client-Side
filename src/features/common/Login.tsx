import { useFormik } from "formik";
import * as Yup from "yup";
import LoginLayout from "../../components/LoginLayout";
import { adminLogin } from "../../services/apis/adminApi";
import { headLogin } from "../../services/apis/headApi";
import { useNavigate } from "react-router-dom";
import { employeeLogin } from "../../services/apis/employeeApi";
import { useDispatch } from "react-redux";
import { adminDetails } from "../../store/slice/adminSlice";
import { headDetails } from "../../store/slice/headSlice";
import { employeDetails } from "../../store/slice/employeeSlice";

interface position {
    position: string;
}

const Login = ({ position }: position) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required")
            .matches(/^\S.*$/, "Email cannot start with a space"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required")
            .matches(/^\S.*$/, "Password cannot start with a space"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            let status;
            switch (position) {
                case "admin":
                    status = adminLogin(values);
                    status.then((data) => {
                        if (data.admin.status === 200 && data.admin.accessToken) {
                            localStorage.setItem("adminToken", data.admin.accessToken);

                            dispatch(adminDetails({
                                id: data.admin.data._id,
                                name: data.admin.data.name,
                                email: data.admin.data.email,
                                image: data.admin.data.image,
                                phone: data.admin.data.phone,
                                country: data.admin.data.country,
                                address: data.admin.data.address,
                                city: data.admin.data.city,
                                pinCode: data.admin.data.pinCode,
                            }))


                            navigate("/admin/dashboard");
                        }
                    });
                    break;
                case "head":
                    status = headLogin(values);
                    status.then((data) => {
                        if (data.head.status === 200 && data.head.accessToken) {
                            localStorage.setItem("headToken", data.head.accessToken);
                            console.log('logindata=====:::', data);

                            dispatch(headDetails({
                                id: data.head.data._id,
                                name: data.head.data.name,
                                email: data.head.data.email,
                                image: data.head.data.image,
                                phone: data.head.data.phone,
                                country: data.head.data.country,
                                address: data.head.data.address,
                                city: data.head.data.city,
                                pinCode: data.head.data.pinCode,
                            }))

                            navigate("/head/dashboard");
                        }
                    });
                    break;
                case "employee":
                    status = employeeLogin(values);
                    status.then((data) => {
                        if (data.employe.status === 200 && data.employe.accessToken) {
                            localStorage.setItem('employeToken', data.employe.accessToken)

                            dispatch(employeDetails({
                                id: data.employe.data._id,
                                name: data.employe.data.name,
                                email: data.employe.data.email,
                                image: data.employe.data.image,
                                phone: data.employe.data.phone,
                                country: data.employe.data.country,
                                address: data.employe.data.address,
                                city: data.employe.data.city,
                                pinCode: data.employe.data.pinCode,
                            }))

                            navigate("/employee/dashboard")
                        }
                    })
                    break;
                default:
                    console.log("Invalid position passed");

            }
        },
    });

    return (
        <>
            <LoginLayout imgPath={"/assets/Group 239222.png"}>
                <form onSubmit={formik.handleSubmit} className="md:flex flex-col  justify-evenly md:h-auto h-full md:py-0 md:px-0 py-28 px-12 ">
                    
                        <div className="hidden md:flex md:flex-col ">
                            <h1 className="text-B1 md:text-4xl  font-bold ">
                                Welcome to our CRM.
                            </h1>
                            <h2 className="text-B1 md:text-2xl  font-semibold ">
                                Sign In to see Latest updates
                            </h2>
                            <p className="text-H1  font-medium">
                                Enter your details to proceed further
                            </p>
                        </div>
                        <div className=" flex flex-col ">
                            <label className="text-H1 max-md:mt-4" htmlFor="email">
                                Email or ID
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="border-H1  lg:h-11 max-md:h-11 border-solid outline-none caret-purple-400 border-b-2 rounded-none"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500">{formik.errors.email}</div>
                            ) : null}

                            <label className="text-H1 mt-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                className="border-H1  lg:h-11 max-md:h-11 border-solid outline-none caret-purple-400 border-b-2 rounded-none"
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-500">{formik.errors.password}</div>
                            ) : null}

                            <p className="text-end my-3 font-bold text-B1">
                                Recover password
                            </p>
                            <button
                                type="submit"
                                className="bg-B1 w-36  md:h-10 rounded-R3 h-9 md:mt-4
                                mt-2 text-white font-bold"
                            >
                                Sign In
                            </button>
                        </div>
                    
                </form>
            </LoginLayout>
        </>
    );
};

export default Login;
