import { useEffect, useState } from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import LeadDetailsPopup from './LeadDetailsPopup';
import { listMyLeads } from '../../services/apis/employeeApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { LeadData } from '../../interfaces/LeadsInterfaces';
import EditLeadDetails from './EditLeadDetails';


const Leads = () => {
    const employe = useSelector((state: RootState) => state.Employe)
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
    const [leads, setLeads] = useState<LeadData[]>([]);
    const [selectedLeadId, setSelectedLeadId] = useState('')
    const [is_open, setIs_open] = useState(false);

    /* handle lead info pop-up */
    const handleOpen = (id: string) => {
        setOpen(true);
        setSelectedLeadId(id)
    };

    const handleClose = () => {
        setOpen(false);
    };
   
    /* handle edit lead info pop-up */
    const handleIs_open = () => {
        handleClose()
        setIs_open(true);
    };

    const handleIs_closed = () => {
        setIs_open(false);
    };

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
                {/* Filter Section */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex px">
                        <button className='bg-white border border-gray-300 rounded-s-lg p-2 cursor-default '>
                            <FilterAltIcon color="action" />
                        </button>
                        {/* Date picker section */}

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
                            <option value="">Order Type</option>
                            <option value="">Order Type</option>
                            <option value="">Order Type</option>
                            {/* Additional filter options */}
                        </select>
                        <select className="font-medium bg-white border border-gray-300  p-2 cursor-pointer">
                            <option value="">Status</option>
                            <option value="">Status</option>
                            <option value="">Status</option>
                            {/* Additional filter options */}
                        </select>
                        <button className=" bg-white border border-gray-300 hover:bg-gray-200 rounded-e-lg text-red-600 py-2 cursor-pointer px-4 ">
                            <span>
                                <RotateLeftIcon color='error' />
                            </span>
                            Reset
                        </button>


                    </div>

                </div>

                {/* Sales Table */}
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
            {open && <LeadDetailsPopup open={open} handleClose={handleClose} selectedLeadId={selectedLeadId} handleIs_open={handleIs_open}/>}
            {is_open && <EditLeadDetails is_open={is_open} handleIs_closed={handleIs_closed} />}
        </>
    )
}

export default Leads