import { Route, Routes } from "react-router-dom"
import Login from "../features/common/Login"
import { Bounce, ToastContainer } from "react-toastify"
import EmployeeLogOutAuth from "../services/authentications/EmployeeLogOut"
import EmployeeLogAuth from "../services/authentications/EmployeeLogAuth"
import DashboardPage from "../pages/Employee pages/DashboardPage"
import LeadsPage from "../pages/Employee pages/LeadsPage"
import ProfilePage from "../pages/Employee pages/ProfilePage"
interface position {
  position: string
}
const EmployeeRouts = ({ position }: position) => {
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
        <Route path="/" element={<EmployeeLogOutAuth><Login position={position} /></EmployeeLogOutAuth>} />
        <Route path="/login" element={<EmployeeLogOutAuth><Login position={position} /></EmployeeLogOutAuth>} />
        <Route path="/dashboard/*" element={<EmployeeLogAuth><DashboardPage /></EmployeeLogAuth>} />
        <Route path="/leads/*" element={<EmployeeLogAuth><LeadsPage /></EmployeeLogAuth>} />
        <Route path="/profile/*" element={<EmployeeLogAuth><ProfilePage /></EmployeeLogAuth>} />
      </Routes>
    </>
  )
}

export default EmployeeRouts