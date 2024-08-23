import { useEffect, useState } from 'react';
import { dashboardPorpesInterface } from '../../interfaces/AdminDashboardInterfaces';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LockResetRoundedIcon from '@mui/icons-material/LockResetRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Navbar = (props: Omit<dashboardPorpesInterface,'setAllSales'|'setLeads'| 'setInbox'| 'setCall'| 'setToDo'>) => {
  const [title, setTitle] = useState('')
  const [isOpen,setIsOpen] = useState(false)

  const admin = useSelector((state:RootState)=>state.Admin)


  useEffect(() => {
    if (props.dashboard) {
      setTitle('Dashboard');
    } else if (props.employee) {
      setTitle('Employee');
    } else if (props.head) {
      setTitle('Head');
    } else if (props.messenger) {
      setTitle('Messenger');
    } else if (props.profileInfo) {
      setTitle('Profile Info');
    }
  }, [props.dashboard, props.employee, props.head, props.messenger,props.profileInfo]);


  
  return (
    <div className="bg-B4 flex justify-between items-center p-4 shadow-md ">
      <div className="flex items-center space-x-4">
        <div className="text-xl font-semibold">{title}</div>
      </div>
      <div className="flex items-center space-x-4" onClick={()=>setIsOpen(!isOpen)}>
        <div className="relative">
          <i className="fas fa-bell text-gray-600"></i>
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        </div>
        <div className="flex items-center space-x-2">
          {admin.image? <img src={admin.image} className="w-8 h-8 rounded-full border-[#6735CC] border-2" />: <img src={`https://ui-avatars.com/api/?name=${admin.name}&background=random}`} className="w-8 h-8 rounded-full border-[#6735CC] border-2" /> }
          <div className="text-sm">{admin.name}</div>
        </div>
      </div>
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-3 top-[71px] mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-30">
          <h1 onClick={()=>{
            props.setProfileInfo(true)
            props.setDashboard(false)
            props.setEmployee(false)
            props.setHead(false)
            props.setMessenger(false)
            
            }}  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            <AccountCircleRoundedIcon fontSize='small' color='primary'/> Manage Account
          </h1>
          <h1 className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            <LockResetRoundedIcon fontSize='small' color='warning'/> Change Password
          </h1>
          <h1 className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
           <LogoutRoundedIcon fontSize='small' color='error'/> Log out
          </h1>
        </div>
      )}
    </div>
  );
};

export default Navbar;
