import { useEffect, useState } from 'react';
import { dashboardPorpesInterface } from '../../interfaces/AdminDashboardInterfaces';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LockResetRoundedIcon from '@mui/icons-material/LockResetRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { employeDetails } from '../../store/slice/employeeSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = (props: Omit<dashboardPorpesInterface, "setAllSales" | "setHead" | "setEmployee">) => {
    const [title, setTitle] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const employe = useSelector((state: RootState) => state.Employe)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (props.dashboard) {
            setTitle('Dashboard');
        } else if (props.leads) {
            setTitle('Leads');
        } else if (props.inbox) {
            setTitle('Inbox');
        } else if (props.call) {
            setTitle('Call');
        } else if (props.messenger) {
            setTitle('Messenger');
        } else if (props.toDo) {
            setTitle('To-Do');
        } else if (props.profileInfo) {
            setTitle('Profile Info');
        }
    }, [props.dashboard, props.leads, props.inbox, props.call, props.toDo, props.messenger, props.profileInfo]);

    const handleLogOut = () => {
        dispatch(
            employeDetails({
                id: '',
                name: '',
                email: '',
                image: '',
                phone: '',
                country: '',
                address: '',
                city: '',
                pinCode: '',
            })
        );
        localStorage.removeItem("employeToken");
        navigate('/employee/login')
    };

    return (
        <div className="bg-B4 flex justify-between items-center p-4 shadow-md ">
            <div className="flex items-center space-x-4">
                <div className="text-xl font-semibold">{title}</div>
            </div>
            <div className="flex items-center space-x-4" onClick={() => setIsOpen(!isOpen)}>
                <div className="relative">
                    <i className="fas fa-bell text-gray-600"></i>
                    <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
                </div>
                <div className="flex items-center space-x-2">
                    {employe.image ? <img src={employe.image} className="w-8 h-8 rounded-full border-[#6735CC] border-2" /> : <img src={`https://ui-avatars.com/api/?name=${employe.name}&background=random`} className="w-8 h-8 rounded-full border-[#6735CC] border-2" />}
                    <div className="text-sm">{employe.name}</div>
                </div>
            </div>
            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-3 top-[71px] mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-30">
                    <h1 onClick={() => {
                        props.setDashboard(false)
                        props.setLeads(false)
                        props.setInbox(false)
                        props.setCall(false)
                        props.setMessenger(false)
                        props.setToDo(false)
                        props.setProfileInfo(true)

                    }} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                        <AccountCircleRoundedIcon fontSize='small' color='primary' /> Manage Account
                    </h1>
                    <h1 className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                        <LockResetRoundedIcon fontSize='small' color='warning' /> Change Password
                    </h1>
                    <h1 onClick={handleLogOut} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                        <LogoutRoundedIcon fontSize='small' color='error' /> Log out
                    </h1>
                </div>
            )}
        </div>
    );
};

export default Navbar;
