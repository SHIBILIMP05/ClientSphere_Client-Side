import { useState } from "react"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const navigate = useNavigate()
    return (

        <div className=" sticky inset-x-0 top-0 w-full z-30">
            <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px:20 relative">
                <div className="flex items-center justify-between">
                    <div className=" flex flex-row items-center gap-4 mt-4" >
                        <img className="w-16 h-16" src="src/assets/clinetSphereLogo.png" alt="logo" />
                        <h1 className="text-B1 text-2xl font-bold ">ClientSphere</h1>

                    </div>
                    <nav>
                        <ul className="flex flex-row space-x-4 p-4">
                            <li>
                                <a href="" className="text-gray-600 font-semibold">About Us</a>
                            </li>
                            <li>
                                <a href="" className="text-gray-600 font-semibold">Features</a>
                            </li>
                            <li>
                                <a href="" className="text-gray-600 font-semibold">Testmonial</a>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <a onClick={()=>setIsOpen(!isOpen)} className="bg-black px-4 py-2 rounded-md text-white cursor-pointer" >Log in</a>
                        {isOpen && (
                            <div className="absolute right-3 top-[71px] mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-30">
                                <h1 onClick={()=>{
                                    navigate('/head')
                                }} className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                                     Head Sign In
                                </h1>
                                <h1 onClick={()=>{
                                    navigate('/employee')
                                }} className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                                     Employe Sign In
                                </h1>
                               
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar