import { ReactNode } from "react"
import SideBar from "./SideBar";
import Navbar from "./Navbar";


interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {

    return (
        <div className="flex min-h-screen bg-B4 ">

            <SideBar />

            <div className="flex-1 md:ml-56 px-2  ">

                <Navbar />

                {children}

            </div>
        </div>
    )
}
export default MainLayout