
export interface SideBarPropInterface{
    setDashboard:React.Dispatch<React.SetStateAction<boolean>>,
    setEmployee:React.Dispatch<React.SetStateAction<boolean>>,
    setHead:React.Dispatch<React.SetStateAction<boolean>>,
    setMessenger:React.Dispatch<React.SetStateAction<boolean>>,
    dashboard:boolean,
    employee:boolean,
    head:boolean,
    messenger:boolean
  }

  