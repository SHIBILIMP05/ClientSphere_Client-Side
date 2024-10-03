
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const SideBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [active, setActive] = useState('')

  useEffect(() => {
    const path = location.pathname.split('/')
    const pthName = path[path.length - 2];
    setActive(pthName)
  }, [location.pathname])

  return (
    <div className="bg-B1 h-full w-[222px] flex flex-col py-9 items-center fixed">
      <div className="text-white text-2xl font-bold mb-9">ClientSphere</div>
      <ul className="space-y-4">
        <li>
          <button onClick={() => {
            navigate('/employee/dashboard/')
          }} className={`flex pl-2  ${active === 'dashboard' ? 'bg-B3' : 'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px] drop-shadow-md shadow-md hover:drop-shadow-xl items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <SpaceDashboardIcon fontSize="small" />
            <span>Dashboard</span>
          </button>
        </li>
        <li>
          <button onClick={() => {
            navigate('/employee/leads/')
          }} className={`flex pl-2  ${active === 'leads' ? 'bg-B3' : 'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px] drop-shadow-md shadow-md hover:drop-shadow-xl items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <BadgeTwoToneIcon fontSize='small' />
            <span>Leads</span>
          </button>
        </li>
        <li>
          <button onClick={() => {
            navigate('/employee/inbox/')

          }} className={`flex pl-2  ${active === 'inbox' ? 'bg-B3' : 'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px] drop-shadow-md shadow-md hover:drop-shadow-xl items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <AdminPanelSettingsTwoToneIcon fontSize='small' />
            <span>Inbox </span>
          </button>
        </li>
        <li>
          <button onClick={() => {
            navigate('/employee/call/')

          }} className={`flex pl-2  ${active === 'call' ? 'bg-B3' : 'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px] drop-shadow-md shadow-md hover:drop-shadow-xl items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <AdminPanelSettingsTwoToneIcon fontSize='small' />
            <span>Call </span>
          </button>
        </li>
        <li>
          <button onClick={() => {
            navigate('/employee/messenger/')

          }} className={`flex pl-2  ${active === 'messenger' ? 'bg-B3' : 'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px] drop-shadow-md shadow-md hover:drop-shadow-xl items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <QuestionAnswerIcon fontSize='small' />
            <span>Messenger</span>
          </button>
        </li>
        <li>
          <button onClick={() => {
            navigate('/employee/toDo/')
          }} className={`flex pl-2  ${active === 'toDo' ? 'bg-B3' : 'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px] drop-shadow-md shadow-md hover:drop-shadow-xl items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <AdminPanelSettingsTwoToneIcon fontSize='small' />
            <span>To-Do </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
