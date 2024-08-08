
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import { useState } from 'react';

const SideBar = () => {

    const [dashboard,setDashboard] = useState(false)
    const [employee,setEmployee] = useState(false)
    const [head,setHead] = useState(false)
    const [messenger,setMessenger] = useState(false)

    


  return (
    <div className="bg-B1 h-full w-[222px] flex flex-col py-9 items-center fixed">
      <div className="text-white text-2xl font-bold mb-9">ClientSphere</div>
      <ul className="space-y-4">
        <li>
          <button onClick={()=>{
            setDashboard(!dashboard)
            setEmployee(false)
            setHead(false)
            setMessenger(false)
            }} className={`flex pl-2  ${dashboard?'bg-B3':'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px]  items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <SpaceDashboardIcon fontSize="small" />
            <span>Dashboard</span>
          </button>
        </li>
        <li>
          <button onClick={()=>{
            setDashboard(false)
            setEmployee(!employee)
            setHead(false)
            setMessenger(false)

          }} className={`flex pl-2  ${employee?'bg-B3':'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px]  items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <BadgeTwoToneIcon fontSize='small'/>
            <span>Employees</span>
          </button>
        </li>
        <li>
          <button onClick={()=>{
            setDashboard(false)
            setEmployee(false)
            setHead(!head)
            setMessenger(false)

          }}className={`flex pl-2  ${head?'bg-B3':'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px]  items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <AdminPanelSettingsTwoToneIcon fontSize='small' />
            <span>Head </span>
          </button>
        </li>
        <li>
          <button onClick={()=>{
            setDashboard(false)
            setEmployee(false)
            setHead(false)
            setMessenger(!messenger)

          }} className={`flex pl-2  ${messenger?'bg-B3':'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px]  items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <QuestionAnswerIcon fontSize='small'/>
            <span>Messenger</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
