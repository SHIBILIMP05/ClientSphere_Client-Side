import { useState } from "react"
import SideBar from "../features/admin/SideBar"
import Dashboard from "../features/admin/Dashboard"
import Employee from "../features/admin/Employee"
import Navbar from "../features/admin/Navbar"
import Profile from "../features/admin/Profile"

const AdminPage = () => {
  const [dashboard, setDashboard] = useState(true)
  const [employee, setEmployee] = useState(false)
  const [head, setHead] = useState(false)
  const [messenger, setMessenger] = useState(false)
  const [profileInfo,setProfileInfo] = useState(false)
  return (
    //  <InnerLayout/>
    <div className="flex min-h-screen bg-B4 ">
      {/* Sidebar */}
      <SideBar dashboard={dashboard} setDashboard={setDashboard} employee={employee} setEmployee={setEmployee} head={head} setHead={setHead} messenger={messenger} setMessenger={setMessenger} profileInfo={profileInfo} setProfileInfo={setProfileInfo} />

      {/* Main Content */}
      <div className="flex-1 md:ml-56 px-2  ">
        {/* Navbar */}
        <Navbar dashboard={dashboard} setDashboard={setDashboard} employee={employee} setEmployee={setEmployee} head={head} setHead={setHead} messenger={messenger} setMessenger={setMessenger} profileInfo={profileInfo} setProfileInfo={setProfileInfo} />

        {dashboard && <Dashboard />}
        {employee && <Employee />}
        {profileInfo&&<Profile/>}

      </div>
    </div>

  )
}

export default AdminPage