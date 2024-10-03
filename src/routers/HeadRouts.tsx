import { Route,Routes } from "react-router-dom"
import Login from "../features/common/Login"
import HeadAuthentication from "../services/authentications/HeadLogAuth"
import HeadLogOutAuth from "../services/authentications/HeadLogOutAuth"
import { Bounce, ToastContainer } from "react-toastify"
import DashboardPage from "../pages/Head pages/DashboardPage"
import EmployeesPage from "../pages/Head pages/EmployeesPage"
import SalesAndLeadsPage from "../pages/Head pages/SalesAndLeadsPage"
import ProfilePage from "../pages/Head pages/ProfilePage"
import MessengerPage from "../pages/Head pages/MessengerPage"
interface position{
    position:string
  }
const HeadRouts = ({position}:position) => {
    return (
      <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce} 
      />
      <Routes>
          <Route path="/" element={<HeadLogOutAuth><Login position={position} /></HeadLogOutAuth>} />
          <Route path="/login" element={<HeadLogOutAuth><Login position={position} /></HeadLogOutAuth>} />
          <Route path="/dashboard/*" element={<HeadAuthentication><DashboardPage/></HeadAuthentication>} />
          <Route path="/employee/*" element={<HeadAuthentication><EmployeesPage/></HeadAuthentication>} />
          <Route path="/sales&leads/*" element={<HeadAuthentication><SalesAndLeadsPage/></HeadAuthentication>} />
          <Route path="/messenger/*" element={<HeadAuthentication><MessengerPage/></HeadAuthentication>} />
          <Route path="/profile/*" element={<HeadAuthentication><ProfilePage/></HeadAuthentication>} />
      </Routes>
      </>
    )
  }

  export default HeadRouts