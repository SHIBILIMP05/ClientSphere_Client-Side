import { Children_I } from "../interfaces/LogInterface";
interface LoginLayout extends Children_I{
  imgPath:string
}
const LoginLayout = ({ children,imgPath }:LoginLayout ) => {

  
  
  return (
    <div className="bg-B1 md:flex max-md:relative w-screen h-screen">
      <div className="bg-white flex justify-center lg:relative max-md:absolute max-md:bottom-0 max-md:rounded-t-R1 max-md:w-screen max-md:h-[65%] sm:w-screen sm:h-[65%] md:w-1/2 md:h-screen  md:rounded-r-R1">
        {children}
      </div>
      <div className=" max-md:flex max-md:flex-col max-md:items-center max-md:pt-20">
        <h1 className="text-white md:hidden text-3xl font-semibold ">Welcom to our CRM.</h1>
        <h1 className="text-white md:hidden text-2xl font-semibold ">Sign In to see Latest updates</h1>
        <p  className="text-H1 md:hidden font-semibold">Enter your details to proceed further</p>
        <img className=" max-md:hidden lg:size-[525px] lg:mt-44 xl:mt-40 xl:ml-40 xl:size-[600px]" src={imgPath} alt="" />

      </div>
    </div>
  );
};

export default LoginLayout;
