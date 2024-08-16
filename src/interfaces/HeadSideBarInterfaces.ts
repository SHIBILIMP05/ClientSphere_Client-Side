export interface HeadSideBarInterface{
    setDashboard:React.Dispatch<React.SetStateAction<boolean>>,
    setEmployee:React.Dispatch<React.SetStateAction<boolean>>,
    setAllSales:React.Dispatch<React.SetStateAction<boolean>>,
    setMessenger:React.Dispatch<React.SetStateAction<boolean>>,
    dashboard:boolean,
    employee:boolean,
    AllSales:boolean
    messenger:boolean
  }