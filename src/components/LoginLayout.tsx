import { Children_I } from "../interfaces/LogInterface";
interface LoginLayout extends Children_I {
  imgPath: string
}
const LoginLayout = ({ children, imgPath }: LoginLayout) => {



  return (
    <div className="bg-B1 flex w-screen h-screen md:flex-row flex-col justify-between ">
      <div className="w-full h-full items-center md:hidden flex flex-col justify-center">
        <h1 className="text-white  text-4xl font-semibold ">Welcom to our CRM.</h1>
        <h1 className="text-white  text-2xl font-semibold ">Sign In to see Latest updates</h1>
        <p className="text-H1  font-semibold">Enter your details to proceed further</p>

      </div>
      <div className="bg-white md:w-full md:rounded-r-[20px] md:rounded-tr-[20px] rounded-t-[20px] md:rounded-t-[0px] md:flex md:justify-center ">
        {children}
      </div>

      <div className="w-full h-full md:flex items-center hidden ">
        <img className="  md:block  w-[90vh] mx-auto " src={imgPath} alt="Login png" />
 
      </div>
    </div>
  );
};

export default LoginLayout;
