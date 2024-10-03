import { useEffect, useState } from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import LeadDetailsPopup from './LeadDetailsPopup';
import { listHistory, listMyLeads } from '../../services/apis/employeeApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { LeadData } from '../../interfaces/LeadsInterfaces';
import EditLeadDetails from './EditLeadDetails';
import AddIcon from '@mui/icons-material/Add';
import AddLead from './AddLead';
import { Button, DialogContent, Popover } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import NotesIcon from '@mui/icons-material/Notes';

import { HistoryData } from '../../interfaces/HistoryInterfaces';




const Leads = () => {
    const employe = useSelector((state: RootState) => state.Employe)
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
    const [leads, setLeads] = useState<LeadData[]>([]);
    const [selectedLeadId, setSelectedLeadId] = useState('')
    const [is_open, setIs_open] = useState(false);
    const [is_addLeadOpen, setIs_addLeadOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [historyList, setHistoryList] = useState<HistoryData[]>([]);

    /* handle lead info pop-up */
    const handleOpen = (id: string) => {
        setOpen(true);
        setSelectedLeadId(id)
    };

    const handleClose = () => {
        setOpen(false);
    };

    /* handle edit lead-info pop-up */
    const handleIs_open = () => {
        handleClose()
        setIs_open(true);
    };

    const handleIs_closed = () => {
        setIs_open(false);
    };

    /* handle add lead pop-up */
    const handleIs_addLeadOpen = () => {
        setIs_addLeadOpen(true)
    };

    const handleIs_addLeadClosed = () => {
        setIs_addLeadOpen(false)
    };

    /* Handle Popover open */
    const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);

        const status = listHistory(employe.id)
        status.then((data) => {
            if (data.response.status === 200) {

                setHistoryList(data.response.historyList)
            } else {

            }
        })
    };

    /* Handle Popover close */
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const isPopoverOpen = Boolean(anchorEl);


    useEffect(() => {

        const status = listMyLeads(employe.id)
        status.then((data) => {
            console.log("data====", data);
            setLeads(data.response.leadsList)

        })
    }, [])


    const handleDatechange = (date: Dayjs | null) => {
        setSelectedDate(date)
        console.log(date?.format('YYY-MM-DD'));

    }

    return (
        <>
            <div className="mt-4 ">

                <div className="flex justify-between items-center mb-4">
                    <div className="flex px">
                        <button className='bg-white border border-gray-300 rounded-s-lg p-2 cursor-default '>
                            <FilterAltIcon color="action" />
                        </button>


                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                onChange={handleDatechange}
                                label="Filter by Date"
                                className='bg-white border border-gray-300 p-2 rounded-none w-40 cursor-pointer'
                                slotProps={{
                                    actionBar: {
                                        actions: ['today', 'clear']
                                    },
                                    textField: {
                                        size: 'small',
                                        color: "secondary",
                                        InputProps: {
                                            style: {
                                                padding: '10px',
                                                height: '44px',
                                                backgroundColor: "white",
                                                borderRadius: "0px"
                                            }
                                        }
                                    }
                                }}
                            />
                        </LocalizationProvider>
                        <select className="font-medium bg-white border border-gray-300  p-2 cursor-pointer ">
                            <option value="">Priority</option>
                            <option value="">High Priority</option>
                            <option value="">Low Priority</option>

                        </select>
                        <select className="font-medium bg-white border border-gray-300  p-2 cursor-pointer">
                            <option value="">Status</option>
                            <option value="">Status</option>
                            <option value="">Status</option>

                        </select>
                        <button className=" bg-white border border-gray-300 hover:bg-gray-200 rounded-e-lg text-red-600 py-2 cursor-pointer px-4 ">
                            <span>
                                <RotateLeftIcon color='error' />
                            </span>
                            Reset
                        </button>


                    </div>
                    <div className='flex gap-2'>
                        <Button sx={{ backgroundColor: "#edebfc" }} onClick={handlePopoverOpen} className="text-gray-700 hover:text-gray-600 min-w-0 p-0">
                            <HistoryIcon fontSize='medium' color='action' />
                        </Button>
                        <button onClick={handleIs_addLeadOpen} className="bg-purple-500 hover:bg-purple-600 text-white py-2  px-4 rounded-lg">
                            Add Lead
                            <span className='ml-3'>
                                <AddIcon />
                            </span>
                        </button>
                    </div>
                </div>


                <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-300">
                            <tr>
                                <th scope="col" className="py-3 px-6">ID</th>
                                <th scope="col" className="py-3 px-6">Name</th>
                                <th scope="col" className="py-3 px-6">Email</th>
                                <th scope="col" className="py-3 px-6">Date</th>
                                <th scope="col" className="py-3 px-6">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads && leads.map((lead, index) => (
                                <tr key={lead._id} onClick={() => (handleOpen(lead._id!))} className="bg-white border-b hover:bg-gray-50 cursor-pointer">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">#{index + 1000}</th>
                                    <td className="py-4 px-6">{lead.name}</td>
                                    <td className="py-4 px-6">{lead.email}</td>
                                    <td className="py-4 px-6">{lead.date ? new Date(lead.date).toLocaleDateString() : 'N/A'}</td>
                                    <td className="py-4 px-6">{lead.lead_status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
                <DialogContent className='flex flex-col items-center '>
                    <h5 className='text-xl flex self-start'>
                        History
                    </h5>
                    {/* <Divider sx={{ width: 280, border: 1, borderColor: "gray" }} orientation="horizontal" /> */}


                    <ul className='flex flex-col self-start overflow-y-auto custom-scrollbar ' style={{ maxHeight: '275px', width: '100%' }}>
                        {historyList.map((history, index) => (
                            <li key={index} className="bg-gray-100 shadow-md rounded-lg p-3 flex  items-center space-x-3 my-2">

                                <div className="flex-shrink-0 " >
                                    <span className="rounded-full bg-indigo-100 p-2 ">

                                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.586 4.586a1 1 0 010 1.414l-1.586 1.586a1 1 0 01-1.414 0L12 13.414l-4.586 4.586a1 1 0 01-1.414 0L4.414 16a1 1 0 010-1.414L9 10l-4.586-4.586a1 1 0 010-1.414l1.586-1.586a1 1 0 011.414 0L12 6.586l4.586-4.586a1 1 0 011.414 0L19 5.414a1 1 0 010 1.414L15 10z" />
                                        </svg> */}
                                        <NotesIcon />
                                    </span>
                                </div>


                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-gray-900">
                                        {history.message}
                                    </span>
                                    <span className="text-sm text-gray-400">
                                        {history.leadId.name}
                                    </span>
                                    <span className="text-sm text-gray-600">
                                        {history.leadId.email}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {new Date(history.date).toLocaleDateString()} - {new Date(history.date).toLocaleTimeString()}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </DialogContent>
            </Popover>
            {open && <LeadDetailsPopup open={open} handleClose={handleClose} selectedLeadId={selectedLeadId} handleIs_open={handleIs_open} />}
            {is_open && <EditLeadDetails is_open={is_open} handleIs_closed={handleIs_closed} selectedLeadId={selectedLeadId} />}
            {is_addLeadOpen && <AddLead handleIs_addLeadClosed={handleIs_addLeadClosed} is_addLeadOpen={is_addLeadOpen} />}
        </>
    )
}

export default Leads