import { useState } from "react"
import SideBar from "../features/head/SideBar"
import Dashboard from "../features/head/Dashboard"
import Navbar from "../features/head/Navbar"


const HeadPage = () => {
  const [dashboard, setDashboard] = useState(true)
  const [employee, setEmployee] = useState(false)
  const [AllSales,setAllSales] = useState(false)
  const [messenger, setMessenger] = useState(false)
  return (
    <div className="flex min-h-screen bg-B4">
      {/* Sidebar */}
      <SideBar dashboard={dashboard} setDashboard={setDashboard} employee={employee} setEmployee={setEmployee} AllSales={AllSales} setAllSales={setAllSales} messenger={messenger} setMessenger={setMessenger} />

      {/* Main Content */}
      <div className="flex-1 ml-56 p-3">
        {/* Navbar */}
        <Navbar dashboard={dashboard} employee={employee} AllSales={AllSales} messenger={messenger} />

        {dashboard && <Dashboard />}

      </div>
    </div>
  )
}

export default HeadPage