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
                                id:data.admin.data._id,
                                name:data.admin.data.name,
                                email:data.admin.data.email,
                                image:data.admin.data.image,
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

                            dispatch(headDetails({
                                id:data.head.data._id,
                                name:data.head.data.name,
                                email:data.head.data.email,
                                image:data.head.data.image,
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
            <LoginLayout imgPath={"/src/assets/Group 239222.png"}>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <div className="max-lg:hidden lg:flex lg:flex-col lg:pt-28 xl:pt-40">
                            <h1 className="text-B1 xl:text-5xl text-3xl font-semibold ">
                                Welcome to our CRM.
                            </h1>
                            <h1 className="text-B1 xl:text-4xl text-2xl font-semibold ">
                                Sign In to see Latest updates
                            </h1>
                            <p className="text-H1 xl:text-xl font-semibold">
                                Enter your details to proceed further
                            </p>
                        </div>
                        <div className="max-md:mt-8 lg:absolute xl:top-96 lg:top-80 flex flex-col">
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
                                className="border-H1 max-md:w-60 xl:w-96 lg:w-64 lg:h-11 max-md:h-11 border-solid outline-none caret-purple-400 border-b-2 rounded-none"
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
                                className="border-H1 max-md:w-60 xl:w-96 lg:w-64 lg:h-11 max-md:h-11 border-solid outline-none caret-purple-400 border-b-2 rounded-none"
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-500">{formik.errors.password}</div>
                            ) : null}

                            <p className="max-md:ml-24 max-md:font-bold xl:ml-[247px] max-md:mt-7 lg:ml-32 lg:mt-9 lg:font-bold text-B1">
                                Recover password
                            </p>
                            <button
                                type="submit"
                                className="bg-B1 max-md:w-36 lg:w-36 lg:h-10 rounded-R3 max-md:h-9 max-md:mt-12 lg:mt-12 text-white font-bold"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </form>
            </LoginLayout>
        </>
    );
};

export default Login;
