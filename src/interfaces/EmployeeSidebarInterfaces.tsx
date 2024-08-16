export interface EmployeeSidebarInterface{
    setDashboard:React.Dispatch<React.SetStateAction<boolean>>,
    setLeads:React.Dispatch<React.SetStateAction<boolean>>,
    setInbox:React.Dispatch<React.SetStateAction<boolean>>,
    setCall:React.Dispatch<React.SetStateAction<boolean>>,
    setMessenger:React.Dispatch<React.SetStateAction<boolean>>,
    setToDo:React.Dispatch<React.SetStateAction<boolean>>,
    dashboard:boolean,
    leads:boolean,
    inbox:boolean,
    call:boolean,
    messenger:boolean,
    toDo:boolean
  }