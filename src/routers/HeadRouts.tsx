import { Route,Routes } from "react-router-dom"
import Login from "../common features/Login"
import Dashboard from "../pages/head/Dashboard"
import HeadAuthentication from "../services/authentications/HeadLogAuth"
import HeadLogOutAuth from "../services/authentications/HeadLogOutAuth"
interface position{
    position:string
  }
const HeadRouts = ({position}:position) => {
    return (
      <Routes>
          <Route path="/" element={<HeadLogOutAuth><Login position={position} /></HeadLogOutAuth>} />
          <Route path="/dashboard" element={<HeadAuthentication><Dashboard/></HeadAuthentication>} />
          <Route path="/login" element={<HeadLogOutAuth><Login position={position} /></HeadLogOutAuth>} />
      </Routes>
    )
  }

  export default HeadRouts