import { useEffect, useState } from 'react';
import { dashboardPorpesInterface } from '../../interfaces/AdminDashboardInterfaces';

const Navbar = (props: dashboardPorpesInterface) => {
    const [title, setTitle] = useState('')

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
        }
    }, [props.dashboard, props.leads, props.inbox,props.call, props.toDo, props.messenger]);

    return (
        <div className="bg-B4 flex justify-between items-center p-4 shadow-md ">
            <div className="flex items-center space-x-4">
                <div className="text-xl font-semibold">{title}</div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <i className="fas fa-bell text-gray-600"></i>
                    <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
                </div>
                <div className="flex items-center space-x-2">
                    <img src="/path-to-profile-picture" alt="Admin" className="w-8 h-8 rounded-full" />
                    <div className="text-sm">Employee Roy</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
