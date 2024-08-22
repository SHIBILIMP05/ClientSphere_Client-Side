import { useState } from "react"
import SideBar from "../features/employee/SideBar"
import Navbar from "../features/employee/Navbar"
import Dashboard from "../features/employee/Dashboard"


const EmployeePage = () => {
    const [dashboard, setDashboard] = useState(true)
    const [leads, setLeads] = useState(false)
    const [inbox, setInbox] = useState(false)
    const [call, setCall] = useState(false)
    const [messenger, setMessenger] = useState(false)
    const [toDo, setToDo] = useState(false)

    
    return (
        <div className="flex min-h-screen bg-B4">
        {/* Sidebar */}
        <SideBar dashboard={dashboard} setDashboard={setDashboard} leads={leads} setLeads={setLeads} inbox={inbox} setInbox={setInbox} call={call} setCall={setCall} messenger={messenger} setMessenger={setMessenger} toDo={toDo} setToDo={setToDo} />
  
        {/* Main Content */}
        <div className="flex-1 ml-56 p-3">
          {/* Navbar */}
          <Navbar dashboard={dashboard} leads={leads} inbox={inbox} call={call} messenger={messenger} toDo={toDo} />
  
          {dashboard && <Dashboard />}
  
        </div>
      </div>
    )
}

export default EmployeePage