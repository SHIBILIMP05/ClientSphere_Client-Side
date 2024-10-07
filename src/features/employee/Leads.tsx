import { useEffect, useState } from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import { listHistory, listMyLeads } from '../../services/apis/employeeApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { LeadData } from '../../interfaces/LeadsInterfaces';
import AddIcon from '@mui/icons-material/Add';
import AddLead from './AddLead';
import { Button, DialogContent, InputAdornment, Pagination, Popover, Stack, TextField } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import NotesIcon from '@mui/icons-material/Notes';

import { HistoryData } from '../../interfaces/HistoryInterfaces';
import MultipleSelectPlaceholder from '../../components/SelectorField';
import SearchIcon from '@mui/icons-material/Search';
import { useDebounce } from '../../services/Hooks/debounceHooks';
import { useNavigate } from 'react-router-dom';




const Leads = () => {
    const employe = useSelector((state: RootState) => state.Employe)

    const [leads, setLeads] = useState<LeadData[]>([]);
    const [is_addLeadOpen, setIs_addLeadOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [historyList, setHistoryList] = useState<HistoryData[]>([]);
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
    const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState<number>(0);
    const [pageCount, setPageCount] = useState(0)

    const debouncedSearch = useDebounce(searchQuery)
    const navigate = useNavigate()
    /* navigating to leads info page */
    const handleOpen = (id: string) => {

        navigate(`/employee/leads/info/${id}`)
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
    /* handle pagination */
    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value - 1)
    };

    /* Handle Popover close */
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const isPopoverOpen = Boolean(anchorEl);


    useEffect(() => {
        console.log("date", selectedDate);
        const status = listMyLeads(employe.id, page, debouncedSearch, selectedStatus, selectedDate?.format('YYYY-MM-DD'))
        status.then((data) => {
            setLeads(data.response.leadsList)
            setPageCount(data.response.count)


        })
    }, [debouncedSearch, selectedStatus, selectedDate, page, employe.id])


    const handleDatechange = (date: Dayjs | null) => {
        setSelectedDate(date)
    }

    const handleResetFilters = () => {
        setSearchQuery('');
        setSelectedStatus([]);
        setSelectedDate(null);
    };

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
                        <MultipleSelectPlaceholder selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
                        <TextField
                            id="input-with-icon-textfield"
                            color='secondary'
                            type="search"
                            placeholder='Search'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                width: '200px',
                                height: '44px',
                                backgroundColor: '#fff',
                                '& .MuiInputBase-root': {
                                    height: '100%',
                                }
                            }}
                        />

                        <button
                            onClick={handleResetFilters}
                            className=" bg-white border border-gray-300 hover:bg-gray-200 rounded-e-lg text-red-600 py-2 cursor-pointer px-4 ">
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
                                <th scope="col" className="py-4 px-6">ID</th>
                                <th scope="col" className="py-4 px-6">Name</th>
                                <th scope="col" className="py-4 px-6">Email</th>
                                <th scope="col" className="py-4 px-6">Date</th>
                                <th scope="col" className="py-4 px-6">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads && leads.map((lead, index) => (
                                <tr key={lead._id} onClick={() => (handleOpen(lead._id!))} className="bg-white border-b hover:bg-gray-50 cursor-pointer">
                                    <th scope="row" className="py-3 px-6 font-medium text-gray-900 whitespace-nowrap">#{index + 1000}</th>
                                    <td className="py-3 px-6">{lead.name}</td>
                                    <td className="py-3 px-6">{lead.email}</td>
                                    <td className="py-3 px-6">{lead.date ? new Date(lead.date).toLocaleDateString() : 'N/A'}</td>
                                    <td className="py-3 px-6">{lead.lead_status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between mt-3 fixed bottom-6 ">
                    <h1 className="font-semibold text-[#7D50E1] ml-5">Page: {page + 1}</h1>
                    <Stack className="fixed right-5">
                        <Pagination count={pageCount} shape="rounded" color="standard" onChange={handlePageChange} />
                    </Stack>
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
            {is_addLeadOpen && <AddLead handleIs_addLeadClosed={handleIs_addLeadClosed} is_addLeadOpen={is_addLeadOpen} />}
        </>
    )
}

export default Leads