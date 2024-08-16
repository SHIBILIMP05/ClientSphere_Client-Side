
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import { EmployeeSidebarInterface } from '../../interfaces/EmployeeSidebarInterfaces';


const SideBar = (props:EmployeeSidebarInterface) => {

  return (
    <div className="bg-B1 h-full w-[222px] flex flex-col py-9 items-center fixed">
      <div className="text-white text-2xl font-bold mb-9">ClientSphere</div>
      <ul className="space-y-4">
        <li>
          <button onClick={()=>{
            props.setDashboard(true)
            props.setLeads(false)
            props.setInbox(false)
            props.setCall(false)
            props.setMessenger(false)
            props.setToDo(false)
            }} className={`flex pl-2  ${props.dashboard?'bg-B3':'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px] drop-shadow-md shadow-md hover:drop-shadow-xl items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <SpaceDashboardIcon fontSize="small" />
            <span>Dashboard</span>
          </button>
        </li>
        <li>
          <button onClick={()=>{
             props.setDashboard(false)
             props.setLeads(true)
             props.setInbox(false)
             props.setCall(false)
             props.setMessenger(false)
             props.setToDo(false)

          }} className={`flex pl-2  ${props.leads?'bg-B3':'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px] drop-shadow-md shadow-md hover:drop-shadow-xl items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <BadgeTwoToneIcon fontSize='small'/>
            <span>Leads</span>
          </button>
        </li>
        <li>
          <button onClick={()=>{
             props.setDashboard(false)
             props.setLeads(false)
             props.setInbox(true)
             props.setCall(false)
             props.setMessenger(false)
             props.setToDo(false)
          }}className={`flex pl-2  ${props.inbox?'bg-B3':'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px] drop-shadow-md shadow-md hover:drop-shadow-xl items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <AdminPanelSettingsTwoToneIcon fontSize='small' />
            <span>Inbox </span>
          </button>
        </li>
        <li>
          <button onClick={()=>{
             props.setDashboard(false)
             props.setLeads(false)
             props.setInbox(false)
             props.setCall(true)
             props.setMessenger(false)
             props.setToDo(false)
          }}className={`flex pl-2  ${props.call?'bg-B3':'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px] drop-shadow-md shadow-md hover:drop-shadow-xl items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <AdminPanelSettingsTwoToneIcon fontSize='small' />
            <span>Call </span>
          </button>
        </li>
        <li>
          <button onClick={()=>{
              props.setDashboard(false)
              props.setLeads(false)
              props.setInbox(false)
              props.setCall(false)
              props.setMessenger(true)
              props.setToDo(false)

          }} className={`flex pl-2  ${props.messenger?'bg-B3':'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px] drop-shadow-md shadow-md hover:drop-shadow-xl items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <QuestionAnswerIcon fontSize='small'/>
            <span>Messenger</span>
          </button>
        </li>
        <li>
          <button onClick={()=>{
              props.setDashboard(false)
              props.setLeads(false)
              props.setInbox(false)
              props.setCall(false)
              props.setMessenger(false)
              props.setToDo(true)
          }}className={`flex pl-2  ${props.toDo?'bg-B3':'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px] drop-shadow-md shadow-md hover:drop-shadow-xl items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <AdminPanelSettingsTwoToneIcon fontSize='small' />
            <span>To-Do </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
