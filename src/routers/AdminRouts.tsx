import { Route, Routes } from "react-router-dom";
import AdminLogAuth from "../services/authentications/AdminLogAuth";
import AdminPage from "../pages/AdminPage";
import AdminLogOutAuth from "../services/authentications/AdminLogOutAuth";
import Login from "../features/common/Login";
import { Bounce, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
        transition={Bounce} // Corrected syntax
      />
      <Routes>
        <Route path="/" element={<AdminLogOutAuth><Login position={position} /></AdminLogOutAuth>} />
        <Route path="/dashboard" element={<AdminLogAuth><AdminPage /></AdminLogAuth>} />
        <Route path="/login" element={<AdminLogOutAuth><Login position={position} /></AdminLogOutAuth>} />
      </Routes>
    </>
  );
}

export default AdminRouts;
