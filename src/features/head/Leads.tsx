import React, { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Popover, DialogContent } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { assignLeads, listEmploye, listNewLeads } from '../../services/apis/headApi';
import { LeadData } from '../../interfaces/LeadsInterfaces';
import { Bounce, toast } from 'react-toastify';
import '../../assets/Styles/scroleBarStyle.css'
import { EmployeeDataInterface } from '../../interfaces/EmployeeInterface';
import { useNavigate } from 'react-router-dom';



const Leads = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [leads, setLeads] = useState<LeadData[]>([])
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [employeeList, setEmployeeList] = useState<EmployeeDataInterface[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredEmployees, setFilteredEmployees] = useState<EmployeeDataInterface[]>([]);

    const navigate = useNavigate()

    useEffect(() => {

        const newLeads = listNewLeads()
        newLeads.then((data) => {
            console.log('datddddda', data);
            if (data.response.status === 200) {
                setLeads(data.response.newLeads)
            } else {
                console.log("error:", data.response.message);
            }
        })
    }, [])

    /* Handle row selection */
    const toggleRowSelection = (_id: string) => {
        setSelectedRows(prev =>
            prev.includes(_id) ? prev.filter(rowId => rowId !== _id) : [...prev, _id]
        );
    };

    /* Handle bulk selection */
    const selectRows = (count: number) => {
        setSelectedRows(leads.slice(0, count).map(lead => lead._id!));
    };

    /* Handle Popover open */
    const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        const status = listEmploye()
        status.then((data) => {
            if (data.response.status === 200) {
                console.log("employees", data.response);
                setEmployeeList(data.response.employeeList)
                setFilteredEmployees(data.response.employeeList);
            } else {
                toast.error(data.response.message)
            }
        })
    };

    /* Handle Popover close */
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const isPopoverOpen = Boolean(anchorEl);

    /* Handle Search input */
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        const filtered = employeeList.filter(employee =>
            employee.name.toLowerCase().includes(value) || employee.email.toLowerCase().includes(value)
        );
        setFilteredEmployees(filtered);
    };

    /* Handle lead assigning */
    const handleLeadAssign = (id: string | undefined) => {
        if (selectedRows.length === 0) {
            toast.warning('Please select Leads', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        } else {
            const status = assignLeads(id!, selectedRows)
            status.then((data) => {
                if (data.response.status === 200) {
                    toast.success(data.response.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    })
                    setLeads(data.response.newLeads)
                    setSelectedRows([])
                    handlePopoverClose()
                }
            })

        }
    }

    return (
        <div className="mt-4 bgwhite relative">

            <div className="flex justify-between items-center mb-4">
                <div className="flex ">
                    <button onClick={() => navigate('/head/sales&leads/')} className=' bg-white border border-gray-300 rounded-s-lg p-2'>

                        <span >
                            <ArrowBackIcon color="action" />
                        </span>

                    </button>
                    <button
                        onClick={() => selectRows(5)}
                        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 border-x-2"
                    >
                        Select 5
                    </button>
                    <button
                        onClick={() => selectRows(10)}
                        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 border-r-2"
                    >
                        Select 10
                    </button>
                    <button onClick={handlePopoverOpen} className="bg-purple-600 text-white py-2 px-4  rounded-e-lg border-">
                        Select Person
                    </button>
                </div>
                
            </div>


            <Popover
                open={isPopoverOpen}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',

                }}
                slotProps={{
                    paper: {
                        style: {
                            borderRadius: "8px",
                            boxShadow: '2px'
                        }
                    }
                }}
            >
                <DialogContent className='flex flex-col items-center'>
                    <div>
                        <InputBase
                            value={searchTerm}
                            onChange={handleSearchChange}
                            sx={{ ml: 1, flex: 1, width: 240 }}
                            placeholder="Search Employees"
                            inputProps={{ 'aria-label': 'Search Employees' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </div>
                    <Divider sx={{ width: 280, border: 1, borderColor: "gray" }} orientation="horizontal" />

                    <ul className='flex flex-col self-start overflow-y-auto custom-scrollbar ' style={{ maxHeight: '275px', width: '100%' }}>
                        {filteredEmployees.map(employee => (

                            <li onClick={() => handleLeadAssign(employee._id)} className=" cursor-pointer flex items-center my-2 space-x-2">
                                <a className="relative block">
                                    {employee.image ? <img alt="profil" src={employee.image} className="mx-auto object-cover rounded-full h-10 w-10" /> : <img alt="profil" src={`https://ui-avatars.com/api/?name=${employee.name}&background=random`} className="mx-auto object-cover rounded-full h-10 w-10" />}
                                </a>
                                <div className="flex flex-col">
                                    <span className="ml-2 text-sm font-semibold text-gray-900"> {employee.name}</span>
                                    <span className="ml-2 text-sm text-gray-400">{employee.email}</span>
                                </div>
                            </li>

                        ))}


                    </ul>
                </DialogContent>
            </Popover>



            <div className="overflow-x-auto relative shadow-md rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-300">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Select
                            </th>
                            <th scope="col" className="py-3 px-6">Name</th>
                            <th scope="col" className="py-3 px-6">Phone</th>
                            <th scope="col" className="py-3 px-6">Email</th>
                            <th scope="col" className="py-3 px-6">Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads && leads.length > 0 ? (
                            leads.map(lead => (
                                <tr key={lead._id} className="bg-white border-b">
                                    <td className="py-4 px-6">
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(lead._id!)}
                                            onChange={() => toggleRowSelection(lead._id!)}
                                            className="cursor-pointer"
                                        />
                                    </td>
                                    <td className="py-4 px-6">{lead.name}</td>
                                    <td className="py-4 px-6">{lead.phone}</td>
                                    <td className="py-4 px-6">{lead.email}</td>
                                    <td className="py-4 px-6">{lead.company}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="py-4 px-6 text-center">No leads found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leads;
