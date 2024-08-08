import { useState } from "react"
import SideBar from "../features/admin/SideBar"
import Dashboard from "../features/head/Dashboard"

const HeadPage = () => {
  const [dashboard,setDashboard] = useState(true)
  const [employee,setEmployee] = useState(false)
  const [head,setHead] = useState(false)
  const [messenger,setMessenger] = useState(false)
  return (
  //  <InnerLayout/>
  <div className="flex min-h-screen bg-B4">
      {/* Sidebar */}
      <SideBar dashboard={dashboard} setDashboard={setDashboard} employee={employee} setEmployee={setEmployee} head={head} setHead={setHead} messenger={messenger} setMessenger={setMessenger} />

      <Dashboard/>
     
    </div>
  )
}

export default HeadPage