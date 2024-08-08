import { useState } from "react";
import LoginLayout from "../components/LoginLayout";
import { adminLogin } from "../services/apis/adminApi";
import { useNavigate } from "react-router-dom";
interface position {
    position: string;
}
const Login = ({ position }: position) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {

        switch (position) {
            case "admin":
                const status = adminLogin({ email, password });
                status.then((data) => {
                    console.log("status====>", data);
                    if (data.admin.status === 200 && data.admin.accessToken) {
                        localStorage.setItem("adminToken", data.admin.accessToken);
                        return navigate("/admin/dashboard");
                    }
                });
                break
            case "head":
                const status = adminLogin({ email, password });
                status.then((data) => {
                    console.log("status====>", data);
                    if (data.admin.status === 200 && data.admin.accessToken) {
                        localStorage.setItem("adminToken", data.admin.accessToken);
                        return navigate("/admin/dashboard");
                    }
                });
                break

        }

    };

    return (
        <>
            <LoginLayout imgPath={"/src/assets/Group 239222.png"}>
                <div>
                    <div className="max-lg:hidden lg:flex lg:flex-col  lg:pt-28 xl:pt-40">
                        <h1 className="text-B1 xl:text-5xl text-3xl font-semibold ">
                            Welcom to our CRM.
                        </h1>
                        <h1 className="text-B1 xl:text-4xl text-2xl font-semibold ">
                            Sign In to see Latest updates
                        </h1>
                        <p className="text-H1 xl:text-xl font-semibold">
                            Enter your details to proceed further
                        </p>
                    </div>
                    <div className="max-md:mt-8 lg:absolute xl:top-96 lg:top-80 flex flex-col  ">
                        <label className="text-H1 max-md:mt-4" htmlFor="text">
                            Email or ID
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-H1 max-md:w-60 xl:w-96 lg:w-64 lg:h-11 max-md:h-11 border-solid outline-none caret-purple-400 border-b-2 rounded-none"
                            type="text"
                        />
                        <label className="text-H1 mt-2" htmlFor="text">
                            Password
                        </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-H1 max-md:w-60 xl:w-96 lg:w-64 lg:h-11 max-md:h-11 border-solid outline-none caret-purple-400 border-b-2 rounded-none"
                            type="text"
                        />
                        <p className="max-md:ml-24 max-md:font-bold xl:ml-[247px] max-md:mt-7 lg:ml-32 lg:mt-9 lg:font-bold text-B1">
                            Recover password
                        </p>
                        <button
                            onClick={handleLogin}
                            className="bg-B1 max-md:w-36 lg:w-36 lg:h-10 rounded-R3 max-md:h-9 max-md:mt-12 lg:mt-12 text-white font-bold"
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </LoginLayout>
        </>
    );
};

export default Login;
