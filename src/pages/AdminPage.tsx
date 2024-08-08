import { useState } from "react"
import SideBar from "../features/admin/SideBar"
import Dashboard from "../features/admin/Dashboard"
import Employee from "../features/admin/Employee"
import Navbar from "../features/admin/Navbar"

const AdminPage = () => {
  const [dashboard, setDashboard] = useState(true)
  const [employee, setEmployee] = useState(false)
  const [head, setHead] = useState(false)
  const [messenger, setMessenger] = useState(false)
  return (
    //  <InnerLayout/>
    <div className="flex min-h-screen bg-B4">
      {/* Sidebar */}
      <SideBar dashboard={dashboard} setDashboard={setDashboard} employee={employee} setEmployee={setEmployee} head={head} setHead={setHead} messenger={messenger} setMessenger={setMessenger} />

      {/* Main Content */}
      <div className="flex-1 ml-56 p-3">
        {/* Navbar */}
        <Navbar dashboard={dashboard} employee={employee} head={head} messenger={messenger} />

        {dashboard && <Dashboard />}
        {employee && <Employee />}

      </div>
    </div>

  )
}

export default AdminPage