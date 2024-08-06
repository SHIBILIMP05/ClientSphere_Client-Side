import { Navigate } from "react-router-dom";
import { Children_I } from "../../interfaces/LogInterface";

const AdminAuthentication = ({ children}:Children_I) => {
  const token = Boolean(localStorage.getItem("adminToken"));
  return token ? children : <Navigate to="/login" />;
};

export default AdminAuthentication;
