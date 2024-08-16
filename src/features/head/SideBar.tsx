
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import { HeadSideBarInterface } from '../../interfaces/HeadSideBarInterfaces';

const SideBar = (props:HeadSideBarInterface) => {

  return (
    <div className="bg-B1 h-full w-[222px] flex flex-col py-9 items-center fixed">
      <div className="text-white text-2xl font-bold mb-9">ClientSphere</div>
      <ul className="space-y-4">
        <li>
          <button onClick={()=>{
            props.setDashboard(true)
            props.setEmployee(false)
            props.setAllSales(false)
            props.setMessenger(false)
            }} className={`flex pl-2  ${props.dashboard?'bg-B3 drop-shadow-xl':'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px] drop-shadow-md shadow-md hover:drop-shadow-xl items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <SpaceDashboardIcon fontSize="small" />
            <span>Dashboard</span>
          </button>
        </li>
        <li>
          <button onClick={()=>{
            props.setDashboard(false)
            props.setEmployee(true)
            props.setAllSales(false)
            props.setMessenger(false)

          }} className={`flex pl-2  ${props.employee?'bg-B3 drop-shadow-xl':'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px] drop-shadow-md shadow-md hover:drop-shadow-xl items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <BadgeTwoToneIcon fontSize='small'/>
            <span>Employees</span>
          </button>
        </li>
        <li>
          <button onClick={()=>{
            props.setDashboard(false)
            props.setEmployee(false)
            props.setAllSales(true)
            props.setMessenger(false)

          }} className={`flex pl-2  ${props.AllSales?'bg-B3 drop-shadow-xl':'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px] drop-shadow-md shadow-md hover:drop-shadow-xl items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <TrendingUpRoundedIcon fontSize='small'/>
            <span>All Sales & Leads</span>
          </button>
        </li>
        <li>
          <button onClick={()=>{
            props.setDashboard(false)
            props.setEmployee(false)
            props.setAllSales(false)
            props.setMessenger(true)

          }} className={`flex pl-2  ${props.messenger?'bg-B3 drop-shadow-xl':'bg-B2'} hover:bg-B3 w-[193.99px] h-[37px] drop-shadow-md shadow-md hover:drop-shadow-xl items-center space-x-2 text-white font-bold text-TS1 rounded-R3 transition-colors duration-500 ease-linear`}>
            <QuestionAnswerIcon fontSize='small'/>
            <span>Messenger</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
