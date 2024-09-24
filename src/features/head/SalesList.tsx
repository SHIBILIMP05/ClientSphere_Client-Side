import { useState } from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';

interface Props {
    setIsLeadsSection: React.Dispatch<React.SetStateAction<boolean>>;
}

const SalesList = (props: Props) => {

    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)

    const [sales, setSales] = useState([
        { id: '00001', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2019', type: 'Electric', status: 'Completed' },
        { id: '00002', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2019', type: 'Electric', status: 'Completed' },
        { id: '00003', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2019', type: 'Electric', status: 'Completed' },
        { id: '00004', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2019', type: 'Electric', status: 'Completed' },
        { id: '00005', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2019', type: 'Electric', status: 'Completed' },
        { id: '00006', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2019', type: 'Electric', status: 'Completed' },
        { id: '00007', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2019', type: 'Electric', status: 'Completed' },
        { id: '00008', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2019', type: 'Electric', status: 'Completed' },
        { id: '00009', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2019', type: 'Electric', status: 'Completed' },
    ]);

    const handleDatechange = (date: Dayjs | null) => {
        setSelectedDate(date)
        console.log(date?.format('YYY-MM-DD'));

    }
    return (
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
                <button onClick={() => props.setIsLeadsSection(true)} className="bg-purple-500 hover:bg-purple-600 text-white py-2  px-4 rounded-lg">
                    Manage Leads
                    <span className='ml-3'>
                        <ArrowForwardIcon/>
                    </span>
                </button>
            </div>

            {/* Sales Table */}
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-300">
                        <tr>
                            <th scope="col" className="py-3 px-6">ID</th>
                            <th scope="col" className="py-3 px-6">Name</th>
                            <th scope="col" className="py-3 px-6">Address</th>
                            <th scope="col" className="py-3 px-6">Date</th>
                            <th scope="col" className="py-3 px-6">Type</th>
                            <th scope="col" className="py-3 px-6">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale => (
                            <tr key={sale.id} className="bg-white border-b hover:bg-gray-50">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">{sale.id}</th>
                                <td className="py-4 px-6">{sale.name}</td>
                                <td className="py-4 px-6">{sale.address}</td>
                                <td className="py-4 px-6">{sale.date}</td>
                                <td className="py-4 px-6">{sale.type}</td>
                                <td className="py-4 px-6">{sale.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesList;
