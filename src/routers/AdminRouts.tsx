import { Route, Routes } from "react-router-dom";
import AdminLogAuth from "../services/authentications/AdminLogAuth";
import AdminLogOutAuth from "../services/authentications/AdminLogOutAuth";
import Login from "../features/common/Login";
import { Bounce, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DashboardPage from "../pages/Admin pages/DashboardPage";
import EmployeePage from "../pages/Admin pages/EmployeePage";
import HeadPage from "../pages/Admin pages/HeadPage";
import MessengerPage from "../pages/Admin pages/MessengerPage";
import ProfilePage from "../pages/Admin pages/ProfilePage";

interface Position {
  position: string;
}

const AdminRouts = ({ position }: Position) => {
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
        <Route path="/" element={<AdminLogOutAuth><Login position={position} /></AdminLogOutAuth>} />
        <Route path="/login" element={<AdminLogOutAuth><Login position={position} /></AdminLogOutAuth>} />
        <Route path="/dashboard/*" element={<AdminLogAuth><DashboardPage /></AdminLogAuth>} />
        <Route path="/employee/*" element={<AdminLogAuth><EmployeePage /></AdminLogAuth>} />
        <Route path="/head/*" element={<AdminLogAuth><HeadPage /></AdminLogAuth>} />
        <Route path="/messenger/*" element={<AdminLogAuth><MessengerPage /></AdminLogAuth>} />
        <Route path="/profile/*" element={<AdminLogAuth><ProfilePage /></AdminLogAuth>} />
      </Routes>
    </>
  );
}

export default AdminRouts;
