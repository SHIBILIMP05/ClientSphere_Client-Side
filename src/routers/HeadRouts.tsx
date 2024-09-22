import { Route,Routes } from "react-router-dom"
import Login from "../features/common/Login"
import HeadAuthentication from "../services/authentications/HeadLogAuth"
import HeadLogOutAuth from "../services/authentications/HeadLogOutAuth"
import { Bounce, ToastContainer } from "react-toastify"
import HeadPage from "../pages/HeadPage"
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
          <Route path="/dashboard" element={<HeadAuthentication><HeadPage/></HeadAuthentication>} />
          <Route path="/login" element={<HeadLogOutAuth><Login position={position} /></HeadLogOutAuth>} />
      </Routes>
      </>
    )
  }

  export default HeadRouts