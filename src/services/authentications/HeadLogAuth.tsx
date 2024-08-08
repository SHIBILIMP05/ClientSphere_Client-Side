import { Navigate } from "react-router-dom";
import { Children_I } from "../../interfaces/LogInterface";

const HeadAuthentication = ({ children}:Children_I) => {
  const token = Boolean(localStorage.getItem("headToken"));
  return token ? children : <Navigate to="/head/login" />;
};

export default HeadAuthentication;
